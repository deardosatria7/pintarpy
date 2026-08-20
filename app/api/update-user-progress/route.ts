// app/api/update-user-progress/route.ts
import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { userCourseProgress } from "@/db/schema";
import { getUserSessionAPI } from "@/lib/actions/sessions";

export async function POST(req: NextRequest) {
  const session = await getUserSessionAPI(req);

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
    if (progress >= 0 && progress < 100) {
      status = "in_progress";
    } else if (progress === 100) {
      status = "completed";
    }

    const userId = session.user.id;

    // Fetch awal progress user (kalau ada)
    const [currentCourseProgress] = await db
      .select({
        progress: userCourseProgress.progress,
        status: userCourseProgress.status,
      })
      .from(userCourseProgress)
      .where(
        and(
          eq(userCourseProgress.userId, userId),
          eq(userCourseProgress.courseId, courseId)
        )
      )
      .limit(1);

    let updatedProgress;

    if (currentCourseProgress) {
      // Update hanya jika progress baru lebih tinggi
      if (progress > currentCourseProgress.progress) {
        [updatedProgress] = await db
          .update(userCourseProgress)
          .set({ progress, status })
          .where(
            and(
              eq(userCourseProgress.userId, userId),
              eq(userCourseProgress.courseId, courseId)
            )
          )
          .returning();
      } else {
        updatedProgress = currentCourseProgress; // Tidak diupdate
      }
    } else {
      // Belum ada, maka buat baru
      [updatedProgress] = await db
        .insert(userCourseProgress)
        .values({ userId, courseId, progress, status })
        .returning();
    }

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
