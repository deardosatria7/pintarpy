import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import FunctionsContent from "./content";

export default async function ArraysPage() {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  // Check if the user is enrolled in the course
  const userId = session.user.id;
  const courseId = "cm9b0ic9q0004txs8mudwhsln"; // Replace with the actual course ID
  const currentUserCourses = await prisma.userCourseProgress.findMany({
    where: {
      userId,
      courseId,
    },
  });

  if (
    currentUserCourses[0]?.status != "in_progress" &&
    currentUserCourses[0]?.status != "completed"
  ) {
    // Redirect to the error page
    return redirect(
      "/error?message=Anda belum menyelesaikan materi sebelumnya. Selesaikan dahulu materi sebelumnya baru melanjutkan ke materi ini!&title=Materi terkunci!&code=403&returnUrl=/courses"
    );
  }

  return <FunctionsContent />;
}
