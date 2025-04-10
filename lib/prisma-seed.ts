// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const rawCourses = [
//   {
//     title: "1. Pengenalan Python",
//     description:
//       "Belajar tentang sejarah Python, sintaks dasar, dan cara menjalankan program pertamamu.",
//     progress: 100,
//     duration: "30 menit",
//     status: "completed",
//   },
//   {
//     title: "2. Variabel dan Tipe Data",
//     description:
//       "Pelajari berbagai tipe data seperti string, integer, float, dan boolean.",
//     progress: 75,
//     duration: "45 menit",
//     status: "in_progress",
//   },
//   {
//     title: "3. Struktur Kontrol",
//     description:
//       "Belajar menggunakan if, else, elif, serta perulangan for dan while.",
//     progress: 25,
//     duration: "60 menit",
//     status: "in_progress",
//   },
//   {
//     title: "4. Fungsi",
//     description:
//       "Pelajari bagaimana mendefinisikan dan memanggil fungsi, termasuk parameter dan return value.",
//     progress: 0,
//     duration: "50 menit",
//     status: "locked",
//   },
//   {
//     title: "5. List, Tuple, dan Dictionary",
//     description:
//       "Kenali struktur data penting di Python dan cara penggunaannya.",
//     progress: 0,
//     duration: "70 menit",
//     status: "locked",
//   },
//   {
//     title: "6. Error Handling",
//     description:
//       "Tangani error dengan try, except, dan akhirnya menulis program yang lebih robust.",
//     progress: 0,
//     duration: "45 menit",
//     status: "locked",
//   },
//   {
//     title: "7. Object-Oriented Programming (OOP)",
//     description:
//       "Dasar-dasar class, objek, inheritance, dan encapsulation di Python.",
//     progress: 0,
//     duration: "90 menit",
//     status: "locked",
//   },
//   {
//     title: "8. File Handling",
//     description: "Membaca dan menulis file menggunakan Python.",
//     progress: 0,
//     duration: "40 menit",
//     status: "locked",
//   },
//   {
//     title: "9. Proyek Mini",
//     description:
//       "Buat proyek kecil seperti kalkulator, todo list, atau game sederhana menggunakan pengetahuan yang sudah dipelajari.",
//     progress: 0,
//     duration: "120 menit",
//     status: "locked",
//   },
// ];

// async function main() {
//   // Step 1: Insert course data
//   for (const course of rawCourses) {
//     const durationNumber = parseInt(course.duration); // "30 menit" -> 30
//     await prisma.course.upsert({
//       where: { id: course.title },
//       update: {},
//       create: {
//         title: course.title,
//         description: course.description,
//         duration: durationNumber,
//       },
//     });
//   }

//   // // Step 2: Insert progress data untuk user tertentu
//   // const user = await prisma.user.findFirst(); // bisa kamu ganti dengan userId tertentu

//   // // if (user) {
//   // //   for (const course of rawCourses) {
//   // //     const dbCourse = await prisma.course.findUnique({
//   // //       where: { title: course.title },
//   // //     });

//   // //     if (dbCourse) {
//   // //       await prisma.userCourseProgress.upsert({
//   // //         where: {
//   // //           userId_courseId: {
//   // //             userId: user.id,
//   // //             courseId: dbCourse.id,
//   // //           },
//   // //         },
//   // //         update: {},
//   // //         create: {
//   // //           userId: user.id,
//   // //           courseId: dbCourse.id,
//   // //           progress: course.progress,
//   // //           status: course.status as CourseStatus,
//   // //         },
//   // //       });
//   // //     }
//   // //   }
//   // // }

//   console.log("Seeding selesai ✅");
// }

// main()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect());
