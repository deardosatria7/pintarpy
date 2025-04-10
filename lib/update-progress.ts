import { auth } from "@/auth";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export async function updateCourseProgress(
  courseId: string,
  progress: number,
  status: "locked" | "in_progress" | "completed"
) {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  if (!session) return;

  await prisma.userCourseProgress.upsert({
    where: {
      userId_courseId: {
        userId: session.user.id!,
        courseId,
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
}
