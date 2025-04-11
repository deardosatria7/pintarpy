// app/api/fetch-user-data/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      {
        success: false,
        title: "Unauthorized",
        message: "Data user tidak ditemukan! Apakah Anda sudah login?",
        code: 401,
      },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { courseId, progress } = body;

    if (!courseId || typeof progress !== "number") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Request tidak valid. Pastikan courseId dan progress telah diisi.",
          code: 400,
        },
        { status: 400 }
      );
    }

    // Tentukan status course berdasarkan nilai progress
    let status: "locked" | "in_progress" | "completed" = "locked";
    if (progress > 0 && progress < 100) {
      status = "in_progress";
    } else if (progress === 100) {
      status = "completed";
    }

    // Lakukan upsert (update jika ada, create jika belum ada)
    const updatedProgress = await prisma.userCourseProgress.upsert({
      where: {
        userId_courseId: {
          userId: session.user.id!, // Pastikan session.user.id tersedia
          courseId: courseId,
        },
      },
      update: {
        progress,
        status,
      },
      create: {
        userId: session.user.id!,
        courseId,
        progress,
        status,
      },
    });

    return NextResponse.json(
      { success: true, data: updatedProgress },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update progress error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat mengupdate progress.",
        code: 500,
      },
      { status: 500 }
    );
  }
}
