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
  section: z.string().min(1, "Section is required"),
  aridNumber: z.string().min(1, "Arid Number is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
});

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
      email,
      section,
    } = body;

    const existingTeam = await prisma.teamData.findFirst({
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

    const newRegistration = await prisma.teamData.create({
      data: {
        teamName,
        teamMembers,
        teamMembersNumber,
        leaderName,
        aridNumber,
        phoneNumber,
        email,
        section,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.NEXT_PUBLIC_GMAIL,
      to: [
        "contact.muhammadmubashir@gmail.com",
        "saifullah.akhtar13@gmail.com",
      ],
      subject: `Message from ${leaderName} (${email})`,
      text: "",
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

    // await sendMailPromise();

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