import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { BookOpen, CheckCircle, ChevronRight, Clock } from "lucide-react";

import SidebarNavigation from "@/components/sidebar-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import prisma from "@/lib/prisma";

export default async function CoursesPage() {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  const userData = {
    name: session.user.name || "User",
    email: session.user.email || "",
    image: session.user.image || "https://via.placeholder.com/150",
  };

  const allCourses = await prisma.course.findMany();

  const progressData = await prisma.userCourseProgress.findMany({
    where: {
      userId: session.user.id,
    },
  });

  // Buat Map dari progress agar pencarian lebih cepat
  const progressMap = new Map(
    progressData.map((item) => [
      item.courseId,
      { progress: item.progress, status: item.status },
    ])
  );

  // Gabungkan data course dan progress user (jika ada)
  const courses = allCourses.map((course) => {
    const userProgress = progressMap.get(course.id);

    return {
      title: course.title,
      description: course.description,
      duration: `${course.duration} menit`,
      progress: userProgress?.progress ?? 0,
      status: userProgress?.status ?? "locked",
    };
  });

  // Menghitung kemajuan keseluruhan
  const overallProgress = Math.round(
    courses.reduce((acc, course) => acc + course.progress, 0) / courses.length
  );

  return (
    <SidebarNavigation
      name={userData.name}
      email={userData.email}
      image={userData.image}
      pageTitle="Materi Pembelajaran"
    >
      <div className="flex flex-col w-full space-y-8">
        {/* Header Section - Dark mode compatible */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-none md:rounded-xl md:m-4 shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
            Selamat Datang di PintarPy, {userData.name}!
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
            Berikut adalah daftar materi yang dapat kamu pelajari. Mulailah dari
            dasar dan tingkatkan kemampuanmu dalam Python!
          </p>

          {/* Progress Overview - Dark mode compatible */}
          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm dark:shadow-md max-w-md">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-200">
                Kemajuan Belajar
              </span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                {overallProgress}%
              </span>
            </div>
            <Progress value={overallProgress} className="h-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Lanjutkan belajar untuk membuka materi selanjutnya!
            </p>
          </div>
        </div>

        {/* Course Grid - Dark mode compatible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-300 hover:shadow-md dark:border-gray-800 ${
                course.status === "locked" ? "opacity-70 dark:opacity-50" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-purple-700 dark:text-purple-400">
                    {course.title}
                  </CardTitle>
                  {course.status === "completed" && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <CardDescription className="line-clamp-2 dark:text-gray-400">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                {course.progress > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs dark:text-gray-400">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1.5" />
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-2">
                <div className="w-full flex justify-between items-center">
                  <Badge
                    variant={
                      course.status === "completed"
                        ? "default"
                        : course.status === "locked"
                        ? "outline"
                        : "secondary"
                    }
                    className={
                      course.status === "locked"
                        ? "dark:border-gray-700 dark:text-gray-400"
                        : ""
                    }
                  >
                    {course.status === "completed"
                      ? "Selesai"
                      : course.status === "locked"
                      ? "Terkunci"
                      : "Sedang Berlangsung"}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-700 hover:text-purple-900 hover:bg-purple-100 dark:text-purple-400 dark:hover:text-purple-300 dark:hover:bg-purple-900/30"
                    disabled={course.status === "locked"}
                  >
                    {course.status === "completed" ? "Ulangi" : "Lanjutkan"}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Recommended Next Section - Dark mode compatible */}
        <div className="mt-8 px-4 md:px-6 pb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Rekomendasi Selanjutnya
          </h2>
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-200 dark:border-purple-900/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-purple-300">
                <BookOpen className="h-5 w-5 text-purple-700 dark:text-purple-400" />
                <span>3. Struktur Kontrol</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Lanjutkan pembelajaran Anda tentang struktur kontrol dalam
                Python
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Anda telah menyelesaikan 25% dari materi ini. Lanjutkan untuk
                mempelajari perulangan for dan while.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700">
                Lanjutkan Belajar
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </SidebarNavigation>
  );
}
