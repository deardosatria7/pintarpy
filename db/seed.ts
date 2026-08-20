import "dotenv/config";
import { db } from "./index";
import { course } from "./schema";

const rawCourses = [
  {
    id: "cm9b0ibwp0000txs80yikyep5",
    title: "1. Pengenalan Python",
    description:
      "Belajar tentang sejarah Python, sintaks dasar, dan cara menjalankan program pertamamu.",
    duration: "30 Menit",
  },
  {
    id: "cm9b0ic1z0001txs8hlw7vv0q",
    title: "2. Variabel dan Tipe Data",
    description:
      "Pelajari berbagai tipe data seperti string, integer, float, dan boolean.",
    duration: "45 Menit",
  },
  {
    id: "cm9b0ic4l0002txs8r19rezrq",
    title: "3. Struktur Kontrol",
    description:
      "Belajar menggunakan if, else, elif, serta perulangan for dan while.",
    duration: "60 Menit",
  },
  {
    id: "cm9b0ic7d0003txs8xg8ziq6b",
    title: "4. Fungsi",
    description:
      "Pelajari bagaimana mendefinisikan dan memanggil fungsi, termasuk parameter dan return value.",
    duration: "50 Menit",
  },
  {
    id: "cm9b0ic9q0004txs8mudwhsln",
    title: "5. List, Tuple, dan Dictionary",
    description:
      "Kenali struktur data penting di Python dan cara penggunaannya.",
    duration: "70 Menit",
  },
  {
    id: "cm9b0iccd0005txs8i1b5yokv",
    title: "6. Error Handling",
    description:
      "Tangani error dengan try, except, dan akhirnya menulis program yang lebih robust.",
    duration: "45 Menit",
  },
  {
    id: "cm9b0icer0006txs8nwm29xat",
    title: "7. Object-Oriented Programming (OOP)",
    description:
      "Dasar-dasar class, objek, inheritance, dan encapsulation di Python.",
    duration: "90 Menit",
  },
  {
    id: "cm9b0ichb0007txs8ov4ndyuz",
    title: "8. File Handling",
    description: "Membaca dan menulis file menggunakan Python.",
    duration: "40 Menit",
  },
  {
    id: "cm9b0icjv0008txs8o4x4o9e2",
    title: "9. Proyek Mini",
    description:
      "Buat proyek kecil seperti kalkulator, todo list, atau game sederhana menggunakan pengetahuan yang sudah dipelajari.",
    duration: "120 Menit",
  },
];

async function main() {
  for (const c of rawCourses) {
    await db
      .insert(course)
      .values({
        id: c.id,
        title: c.title,
        description: c.description,
        duration: parseInt(c.duration, 10), // "30 Menit" -> 30
      })
      .onConflictDoNothing({ target: course.id });
  }

  console.log("Seeding selesai ✅");
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
