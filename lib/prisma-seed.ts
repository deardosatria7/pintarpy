import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawCourses = [
  {
    id: "cm9b0ibwp0000txs80yikyep5",
    title: "1. Pengenalan Python",
    description:
      "Belajar tentang sejarah Python, sintaks dasar, dan cara menjalankan program pertamamu.",
    duration: "30 Menit",
    createdAt: "2025-04-10T07:03:54.313Z",
  },
  {
    id: "cm9b0ic1z0001txs8hlw7vv0q",
    title: "2. Variabel dan Tipe Data",
    description:
      "Pelajari berbagai tipe data seperti string, integer, float, dan boolean.",
    duration: "45 Menit",
    createdAt: "2025-04-10T07:03:54.504Z",
  },
  {
    id: "cm9b0ic4l0002txs8r19rezrq",
    title: "3. Struktur Kontrol",
    description:
      "Belajar menggunakan if, else, elif, serta perulangan for dan while.",
    duration: "60 Menit",
    createdAt: "2025-04-10T07:03:54.597Z",
  },
  {
    id: "cm9b0ic7d0003txs8xg8ziq6b",
    title: "4. Fungsi",
    description:
      "Pelajari bagaimana mendefinisikan dan memanggil fungsi, termasuk parameter dan return value.",
    duration: "50 Menit",
    createdAt: "2025-04-10T07:03:54.698Z",
  },
  {
    id: "cm9b0ic9q0004txs8mudwhsln",
    title: "5. List, Tuple, dan Dictionary",
    description:
      "Kenali struktur data penting di Python dan cara penggunaannya.",
    duration: "70 Menit",
    createdAt: "2025-04-10T07:03:54.782Z",
  },
  {
    id: "cm9b0iccd0005txs8i1b5yokv",
    title: "6. Error Handling",
    description:
      "Tangani error dengan try, except, dan akhirnya menulis program yang lebih robust.",
    duration: "45 Menit",
    createdAt: "2025-04-10T07:03:54.877Z",
  },
  {
    id: "cm9b0icer0006txs8nwm29xat",
    title: "7. Object-Oriented Programming (OOP)",
    description:
      "Dasar-dasar class, objek, inheritance, dan encapsulation di Python.",
    duration: "90 Menit",
    createdAt: "2025-04-10T07:03:54.963Z",
  },
  {
    id: "cm9b0ichb0007txs8ov4ndyuz",
    title: "8. File Handling",
    description: "Membaca dan menulis file menggunakan Python.",
    duration: "40 Menit",
    createdAt: "2025-04-10T07:03:55.056Z",
  },
  {
    id: "cm9b0icjv0008txs8o4x4o9e2",
    title: "9. Proyek Mini",
    description:
      "Buat proyek kecil seperti kalkulator, todo list, atau game sederhana menggunakan pengetahuan yang sudah dipelajari.",
    duration: "120 Menit",
    createdAt: "2025-04-10T07:03:55.147Z",
  },
];

async function main() {
  // Step 1: Insert course data
  for (const course of rawCourses) {
    const durationNumber = parseInt(course.duration); // "30 menit" -> 30
    await prisma.course.upsert({
      where: { id: course.title },
      update: {},
      create: {
        id: course.id,
        title: course.title,
        description: course.description,
        duration: durationNumber,
      },
    });
  }

  // // Step 2: Insert progress data untuk user tertentu
  // const user = await prisma.user.findFirst(); // bisa kamu ganti dengan userId tertentu

  // // if (user) {
  // //   for (const course of rawCourses) {
  // //     const dbCourse = await prisma.course.findUnique({
  // //       where: { title: course.title },
  // //     });

  // //     if (dbCourse) {
  // //       await prisma.userCourseProgress.upsert({
  // //         where: {
  // //           userId_courseId: {
  // //             userId: user.id,
  // //             courseId: dbCourse.id,
  // //           },
  // //         },
  // //         update: {},
  // //         create: {
  // //           userId: user.id,
  // //           courseId: dbCourse.id,
  // //           progress: course.progress,
  // //           status: course.status as CourseStatus,
  // //         },
  // //       });
  // //     }
  // //   }
  // // }

  console.log("Seeding selesai ✅");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
