import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";
import * as z from "zod";
import Mail from "nodemailer/lib/mailer";

const RegistrationSchema = z.object({
  TeamName: z.string().min(1, "TeamName is required"),
  TeamMembersList: z.array(z.string()),
  leaderName: z.string().min(1, "LeaderName is required"),
  leaderArid: z.string().min(1, "LeaderArid is required"),
  leaderPhone: z
    .string()
    .refine((value) => value !== "", { message: "LeaderPhone is required" }),
  leaderEmail: z
    .string()
    .email()
    .refine((value) => value !== "", { message: "LeaderEmail is required" }),
  leaderSection: z
    .string()
    .refine((value) => value !== "", { message: "LeaderSection is required" }),
});

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();

    RegistrationSchema.parse(body);

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    const {
      TeamName,
      TeamMembersList,
      leaderName,
      leaderArid,
      leaderPhone,
      leaderEmail,
      leaderSection,
    } = body;

    const existingTeam = await prisma.teamData.findFirst({
      where: {
        leaderName: leaderName,
        TeamName: TeamName,
        leaderEmail: leaderEmail,
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
        TeamName,
        TeamMembersList,
        leaderName,
        leaderArid,
        leaderPhone,
        leaderEmail,
        leaderSection,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.NEXT_PUBLIC_GMAIL,
      to: [
        "contact.muhammadmubashir@gmail.com",
        "saifullah.akhtar13@gmail.com",
      ],
      subject: `Message from ${leaderName} (${leaderEmail})`,
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

    await sendMailPromise();

    return NextResponse.json(
      { team: newRegistration, message: "User created successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating team registration:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "An error occurred while processing the request." },
      { status: 502 }
    );
  }
};
