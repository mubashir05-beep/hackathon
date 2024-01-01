import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";
import * as z from "zod";
import Mail from "nodemailer/lib/mailer";

const registrationSchema = z.object({
  teamName: z.string().min(1, "Team Name is required"),
  teamMembers: z.array(z.string()).min(1, "Team Members is required"),
  teamMembersNumber: z.string().min(1, "Team Members Number is required"),
  leaderName: z.string().min(1, "Leader Name is required"),
  projectTitle: z.string().min(1, "Project Title is required"),
  projectDesc: z.string().min(1, "Project Desc is required"),
  section: z.string().min(1, "Section is required"),
  aridNumber: z.string().min(1, "Arid Number is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
});

function getTodayDate(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

const todayDate = getTodayDate();



export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();

    registrationSchema.parse(body);

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    const {
      teamName,
      teamMembers,
      teamMembersNumber,
      leaderName,
      aridNumber,
      phoneNumber,
      updatedAt,
      projectTitle,
      projectDesc,
      email,
      section,
    } = body;

    const existingTeam = await prisma.registration_Details.findFirst({
      where: {
        leaderName: leaderName,
        teamName: teamName,
        email: email,
      },
    });

    if (existingTeam) {
      return NextResponse.json(
        {
          team: null,
          message: "Team with this Name, Mail, or Leader already exists!",
        },
        { status: 409 }
      );
    }

    const newRegistration = await prisma.registration_Details.create({
      data: {
        teamName,
        teamMembers,
        teamMembersNumber,
        leaderName,
        aridNumber,
        projectTitle,
        projectDesc,
        phoneNumber,
        email,
        section,
      },
    });
    const mailOptions: Mail.Options = {
      from: process.env.NEXT_PUBLIC_GMAIL,
      to: email,
      subject: `Thank You for Registering! Get Ready for InnoJam 2024!`,
      html: `
        <p>Dear ${leaderName},</p>
    
        <p>We are thrilled to inform you that your registration for the team ${teamName} in InnoJam 2024 has been successfully confirmed! We appreciate your enthusiasm for innovation and look forward to an exciting and collaborative experience with you.</p>
        
        <p><strong>Here are the details for InnoJam 2024:</strong></p>
        
        <p><strong>Registration Details:</strong></p>
        
        <ul>
          <li><strong>Team Leader:</strong> ${leaderName} - ${aridNumber} - ${section}</li>
          <li><strong>Date of Registration:</strong> ${todayDate}</li>
          <li><strong>Team Name:</strong> ${teamName}</li>
          <li><strong>Team Members:</strong> ${teamMembers}</li>
          <li><strong>Email Address:</strong> ${email}</li>
          <li><strong>Phone Number:</strong> ${phoneNumber}</li>
        </ul>
        <p><strong>Project Details:</strong></p>
        <ul>
        <li><strong>Project Title:</strong> ${projectTitle}</li>
        <li><strong>Project Description:</strong> ${projectDesc}</li>
      </ul>
  

        <p>If the details you provided are incorrect or if you have any concerns, please don't hesitate to contact us at <a href="mailto:innojam40@gmail.com">innojam40@gmail.com</a> / <a href="tel:+923056207807">+92 305 6207807</a>. Your feedback is important to us, and we're here to ensure your InnoJam 2024 experience is seamless.</p>
    
        <p>If you have questions, need further details, or wish to contribute to make this event a success, we look forward to meeting you. Thank you for being part of InnoJam 2024, where your passion for innovation shapes the success of the event. We can't wait to witness the incredible projects that will emerge from this hackathon.</p>
        
        <p>Best Regards,</p>
    
        <p>Muhammad Mubashir Munir Khan,<br>Innojam 2024</p>
      `,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        });
      });

    console.log("New registration created:", newRegistration);

    await sendMailPromise();

    return NextResponse.json(
      { team: newRegistration, message: "User created successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating team registration:", error);

    if (error instanceof z.ZodError) {
      console.error("Validation error details:", error.errors);
      return NextResponse.json(
        { message: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "An error occurred while processing the request.", error },
      { status: 502 }
    );
  }
};
