import { NextResponse } from "next/server";
import prisma from "@/lib/prismamain";
import { ReportType } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { sendMail } from "@/utils/mailer";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: User not authenticated" },
        { status: 401 }
      );
    }

    const userId = parseInt(session.user.id);

    const {
      reportId,
      type,
      specificType,
      title,
      description,
      location,
      latitude,
      longitude,
      image,
      status,
    } = await request.json();

    const report = await prisma.report.create({
      data: {
        reportId,
        type: type as ReportType,
        title,
        description,
        reportType: specificType,
        location,
        latitude: latitude || null,
        longitude: longitude || null,
        image: image || null,
        status: status || "PENDING",
        userId,
      },
    });

    await sendMail(
      "ganupund7218@gmail.com",
      session.user.email,
      "Your Report Has Been Successfully Submitted! 🚨",
      `
    <h1 style="color: #0369a1;">Thank You for Submitting Your Report! 🙌</h1>
    <p>Dear ${session.user.name || "User"},</p>
    <p>We have received your report with the following details:</p>
    <ul style="font-family: Arial, sans-serif; line-height: 1.6;">
      <li><strong>Report ID:</strong> ${reportId}</li>
      <li><strong>Title:</strong> ${title}</li>
      <li><strong>Type:</strong> ${type}</li>
      <li><strong>Status:</strong> ${status || "PENDING"}</li>
    </ul>
    <p>Our team will review the details and get back to you shortly. In the meantime, you can check the status of your report using the Report ID: <strong>${reportId}</strong>.</p>
    <p>For any urgent queries, feel free to reach out to us at <a href="mailto:admin@example.com">admin@example.com</a>.</p>
    <p style="margin-top: 20px;">Thank you for helping us improve the community by reporting this issue. Together, we can make a difference! 🌟</p>
    <p style="font-style: italic; color: #666;">This email is auto-generated. Please do not reply to this address.</p>
  `
    );

    return NextResponse.json({
      success: true,
      reportId: report.reportId,
      message: "Report submitted successfully",
    });
  } catch (error) {
    console.error("Error creating report:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit report",
      },
      { status: 500 }
    );
  }
}
