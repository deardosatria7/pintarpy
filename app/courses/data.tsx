// This file contains all the lesson steps for the courses
import PyScriptTerminal from "@/components/pyscipt-terminal";
import { LessonSteps } from "@/types";
import {
  BookOpen,
  CheckCircle,
  Users,
  Code,
  Briefcase,
  Info,
  LightbulbIcon,
  ChevronRight,
  List,
  Type,
  Variable,
} from "lucide-react";
import CodeBlock from "@/components/code-block";

// courses/introduction
export const introductionLessonSteps: LessonSteps[] = [
  {
    id: 1,
    title: "Apa itu Python?",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Python adalah bahasa pemrograman tingkat tinggi yang mudah dibaca dan
          dipahami, cocok untuk pemula maupun profesional.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Python digunakan untuk berbagai keperluan seperti pengembangan web,
          analisis data, kecerdasan buatan, automasi, dan lainnya.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Ciri khas Python adalah sintaks yang ringkas dan jelas, sehingga
          sangat ramah untuk pemula.
        </p>
        <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Fakta Menarik
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Nama Python tidak berasal dari ular, melainkan dari acara komedi
            Inggris &#34;Monty Python&#39;s Flying Circus&#34; yang disukai oleh
            Guido van Rossum, sang pencipta bahasa ini.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Kenapa Belajar Python?",
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Mudah Dipelajari
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Sintaks yang jelas dan sederhana, mirip dengan bahasa Inggris
                sehari-hari.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Komunitas Besar
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Dukungan komunitas yang luas dengan banyak tutorial dan library.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Multiguna
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Digunakan untuk web, data science, AI, automasi, dan banyak
                lagi.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
              <Briefcase className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Peluang Karir
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Banyak digunakan di industri (Google, Netflix, Instagram).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
            <Info className="h-5 w-5" />
            Statistik Popularitas
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Python secara konsisten menduduki peringkat 3 besar dalam indeks
            popularitas bahasa pemrograman TIOBE dan menduduki peringkat #1
            dalam survei Stack Overflow Developer Survey.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Program Python Pertama",
    content: (
      <>
        <div className="mb-4">
          <p className="text-gray-700 dark:text-gray-300">
            Mari kita mulai dengan program Python paling sederhana: mencetak
            teks &#34;Hello World!&#34; ke layar.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div>
            <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`print("Hello World!")`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Coba Sendiri:
          </h3>
          <PyScriptTerminal />
          <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
            Ketik{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              print(&#34;Hello World!&#34;)
            </code>{" "}
            di terminal di atas dan jalankan kode untuk melihat hasilnya.
          </p>
        </div>

        <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
          <h3 className="font-medium text-green-800 dark:text-green-300 flex items-center gap-2">
            <LightbulbIcon className="h-5 w-5" />
            Penjelasan
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Fungsi{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              print()
            </code>{" "}
            digunakan untuk menampilkan output ke layar. Teks yang ingin
            ditampilkan diapit oleh tanda kutip.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Ringkasan & Langkah Selanjutnya",
    content: (
      <>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mb-6">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 text-lg mb-3">
            Apa yang sudah kita pelajari:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Python adalah bahasa pemrograman tingkat tinggi yang mudah
                dibaca dan dipelajari
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Python digunakan untuk berbagai keperluan seperti web, data
                science, dan AI
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Menulis program Python pertama menggunakan fungsi print()
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
            Langkah Selanjutnya:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pada materi berikutnya, kita akan mempelajari tentang variabel dan
            tipe data dalam Python. Kamu akan belajar cara menyimpan dan
            memanipulasi data dalam program.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Pratinjau Materi Berikutnya
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              &#34;Variabel dan Tipe Data&#34; akan mengajarkan kamu tentang:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>Cara membuat dan menggunakan variabel</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>Tipe data dasar: string, integer, float, boolean</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>Konversi antar tipe data</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

// courses/variables-and-data-types
export const variablesAndDataTypesLessonSteps: LessonSteps[] = [
  {
    id: 1,
    title: "Variabel dalam Python",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Variabel adalah tempat untuk menyimpan data dalam program. Dalam
          Python, variabel dibuat saat Anda memberikan nilai padanya.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Python tidak memerlukan deklarasi tipe data saat membuat variabel,
          karena Python menggunakan &#34;dynamic typing&#34;.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Untuk membuat variabel, gunakan tanda sama dengan (=) untuk memberikan
          nilai.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
          <CodeBlock
            code={`# Membuat variabel
nama = "Budi"
umur = 25
tinggi = 175.5

# Menggunakan variabel
print("Nama:", nama)
print("Umur:", umur, "tahun")
print("Tinggi:", tinggi, "cm")`}
          ></CodeBlock>
        </div>

        <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Fakta Menarik
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Nama variabel dalam Python bersifat case-sensitive, artinya
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              {" "}
              nama{" "}
            </code>
            dan
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              {" "}
              Nama{" "}
            </code>
            dianggap sebagai dua variabel yang berbeda.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Tipe Data Dasar",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Python memiliki beberapa tipe data dasar yang sering digunakan. Tipe
          data menentukan jenis nilai yang dapat disimpan dan operasi yang dapat
          dilakukan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
              <Type className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                String (str)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Teks yang diapit oleh tanda kutip tunggal atau ganda.
              </p>
              <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400 mt-2 block">
                nama = &#34;Budi&#34;
              </code>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
              <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Integer (int)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Bilangan bulat tanpa desimal.
              </p>
              <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400 mt-2 block">
                umur = 25
              </code>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
              <Variable className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Float
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Bilangan desimal atau pecahan.
              </p>
              <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400 mt-2 block">
                tinggi = 175.5
              </code>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Boolean (bool)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Nilai kebenaran: True atau False.
              </p>
              <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400 mt-2 block">
                aktif = True
              </code>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
            <Info className="h-5 w-5" />
            Memeriksa Tipe Data
          </h3>
          <p className="text-gray-700 dark:text-gray-300 my-2">
            Anda dapat menggunakan fungsi{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              type()
            </code>{" "}
            untuk memeriksa tipe data dari sebuah variabel.
          </p>
          <CodeBlock
            code={`nama = "Budi"
print(type(nama))  # Output: <class 'str'>

umur = 25
print(type(umur))  # Output: <class 'int'>`}
          ></CodeBlock>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Konversi Tipe Data",
    content: (
      <>
        <div className="mb-4">
          <p className="text-gray-700 dark:text-gray-300">
            Terkadang kita perlu mengubah tipe data dari satu bentuk ke bentuk
            lainnya. Python menyediakan fungsi bawaan untuk konversi tipe data.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <CodeBlock
            code={`# Konversi ke string
umur = 25
umur_str = str(umur)
print("Umur saya " + umur_str + " tahun")

# Konversi ke integer
angka_str = "100"
angka_int = int(angka_str)
print(angka_int + 50)  # Output: 150

# Konversi ke float
angka_int = 75
angka_float = float(angka_int)
print(angka_float)  # Output: 75.0`}
          ></CodeBlock>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Coba Sendiri:
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800/80 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Cobalah kode berikut di interpreter Python:
            </p>
            <CodeBlock
              code={`# Konversi string ke float
tinggi_str = "175.5"
tinggi_float = float(tinggi_str)
tinggi_meter = tinggi_float / 100
print("Tinggi Anda dalam meter adalah:", tinggi_meter, "m")`}
            ></CodeBlock>
          </div>
        </div>

        <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
          <h3 className="font-medium text-green-800 dark:text-green-300 flex items-center gap-2">
            <LightbulbIcon className="h-5 w-5" />
            Penjelasan
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Fungsi{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              input()
            </code>{" "}
            selalu mengembalikan string, sehingga jika Anda ingin melakukan
            operasi matematika dengan input pengguna, Anda perlu mengkonversinya
            ke tipe numerik terlebih dahulu.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Struktur Data Dasar",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Selain tipe data dasar, Python juga memiliki struktur data yang dapat
          menyimpan kumpulan nilai. Berikut adalah beberapa struktur data yang
          umum digunakan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <List className="h-5 w-5 text-purple-600" />
              List
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Koleksi terurut yang dapat diubah dan dapat berisi berbagai tipe
              data.
            </p>
            <pre className="text-xs bg-gray-900 text-gray-100 p-2 rounded-md overflow-x-auto mt-2">
              <code>{`buah = ["apel", "jeruk", "mangga"]
print(buah[0])  # Output: apel
buah.append("pisang")
print(buah)  # ["apel", "jeruk", "mangga", "pisang"]`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <List className="h-5 w-5 text-blue-600" />
              Tuple
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Koleksi terurut yang tidak dapat diubah (immutable).
            </p>
            <pre className="text-xs bg-gray-900 text-gray-100 p-2 rounded-md overflow-x-auto mt-2">
              <code>{`koordinat = (10.5, 20.8)
print(koordinat[1])  # Output: 20.8
# koordinat[0] = 15  # Error! Tuple tidak dapat diubah`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <List className="h-5 w-5 text-green-600" />
              Dictionary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Koleksi pasangan key-value yang tidak terurut.
            </p>
            <pre className="text-xs bg-gray-900 text-gray-100 p-2 rounded-md overflow-x-auto mt-2">
              <code>{`siswa = {
"nama": "Budi",
"umur": 17,
"kelas": "XI IPA"
}

print(siswa["nama"])  # Output: Budi
siswa["nilai"] = 85  # Menambah key-value baru`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <List className="h-5 w-5 text-orange-600" />
              Set
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Koleksi tidak terurut tanpa duplikat.
            </p>
            <pre className="text-xs bg-gray-900 text-gray-100 p-2 rounded-md overflow-x-auto mt-2">
              <code>{`warna = {"merah", "hijau", "biru"}
warna.add("kuning")
warna.add("merah")  # Tidak akan menambah duplikat
print(warna)  # Output: {'hijau', 'merah', 'biru', 'kuning'}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
            <Info className="h-5 w-5" />
            Kapan Menggunakan Struktur Data Tertentu?
          </h3>
          <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-blue-500 mt-1" />
              <span>
                Gunakan <strong>List</strong> ketika Anda perlu menyimpan
                kumpulan item yang dapat berubah dan terurut.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-blue-500 mt-1" />
              <span>
                Gunakan <strong>Tuple</strong> untuk data yang tidak boleh
                berubah, seperti koordinat atau konfigurasi tetap.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-blue-500 mt-1" />
              <span>
                Gunakan <strong>Dictionary</strong> ketika Anda perlu menyimpan
                data dengan pasangan key-value untuk akses cepat.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-blue-500 mt-1" />
              <span>
                Gunakan <strong>Set</strong> ketika Anda perlu menyimpan
                kumpulan nilai unik dan melakukan operasi himpunan.
              </span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Ringkasan & Langkah Selanjutnya",
    content: (
      <>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mb-6">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 text-lg mb-3">
            Apa yang sudah kita pelajari:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Variabel dalam Python dan cara membuatnya</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Tipe data dasar: string, integer, float, dan boolean</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Cara mengkonversi antar tipe data</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Struktur data dasar: list, tuple, dictionary, dan set</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
            Langkah Selanjutnya:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pada materi berikutnya, kita akan mempelajari tentang struktur
            kontrol dalam Python. Kamu akan belajar bagaimana membuat alur
            logika program menggunakan percabangan dan perulangan.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Pratinjau Materi Berikutnya
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              &#34;Struktur Kontrol&#34; akan mengajarkan kamu tentang:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Percabangan dengan <code>if</code>, <code>elif</code>, dan{" "}
                  <code>else</code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Perulangan dengan <code>for</code> dan <code>while</code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Pemanfaatan <code>break</code>, <code>continue</code>, dan{" "}
                  <code>pass</code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Penggunaan struktur kontrol dalam studi kasus sederhana
                </span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

// courses/control-structures
export const controlStructuresLessonSteps: LessonSteps[] = [
  {
    id: 1,
    title: "Pengantar Struktur Kontrol",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Struktur kontrol adalah fondasi dalam pemrograman yang menentukan alur
          eksekusi kode berdasarkan kondisi tertentu atau pengulangan.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Dengan memahami struktur kontrol, kamu akan bisa membuat program yang
          lebih dinamis dan interaktif, seperti memutuskan jalur program dengan
          kondisi atau melakukan perulangan hingga syarat tertentu tercapai.
        </p>
        <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Fakta Menarik
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Struktur kontrol yang paling sering digunakan adalah percabangan dan
            perulangan, yang memungkinkan program untuk &#34;memutuskan&#34;
            tindakan berdasarkan kondisi tertentu.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Percabangan dengan If, Elif, dan Else",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Percabangan memungkinkan program memilih jalur yang berbeda
          berdasarkan kondisi. Di Python, struktur percabangan dasar menggunakan{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            if
          </code>
          ,{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            elif
          </code>{" "}
          dan{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            else
          </code>
          .
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
          <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{`nilai = 75

if nilai >= 80:
    print("Lulus dengan baik!")
elif nilai >= 60:
    print("Lulus, tapi bisa lebih baik.")
else:
    print("Perlu belajar lebih giat.")`}</code>
          </pre>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Menurutmu apa yang akan muncul ketika kode di atas dijalankan?
        </p>

        <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
          <h3 className="font-medium text-green-800 dark:text-green-300 flex items-center gap-2">
            <LightbulbIcon className="h-5 w-5" />
            Penjelasan
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Kode di atas memeriksa nilai dan mencetak pesan sesuai dengan
            rentang nilai. Perhatikan indentasi yang penting dalam Python untuk
            menentukan blok kode.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Perulangan dengan For dan While",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Perulangan digunakan untuk menjalankan sekelompok perintah secara
          berulang. Python menyediakan dua jenis perulangan:{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            for
          </code>{" "}
          dan{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            while
          </code>
          .
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Contoh Perulangan For:
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`for i in range(5):
    print("Angka", i)`}</code>
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Menurutmu apa yang akan ditampilkan ketika kode di atas dijalankan?
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Contoh Perulangan While:
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`count = 0
while count < 5:
    print("Hitung", count)
    count += 1`}</code>
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Menurutmu apa yang akan terjadi pada variabel{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              count
            </code>{" "}
            selama perulangan?
          </p>
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
            Tips untuk Pemula
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Selalu perhatikan indentasi dan kondisi yang kamu buat agar tidak
            terjadi infinite loop (perulangan tanpa henti). Gunakan{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              break
            </code>{" "}
            untuk menghentikan perulangan jika diperlukan.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Praktek Langsung: Struktur Kontrol",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Sekarang, coba praktekkan struktur kontrol dengan menggabungkan
          percabangan dan perulangan. Berikut beberapa contoh kode yang bisa
          kamu coba:
        </p>
        <CodeBlock
          code={`# Contoh 1: Percabangan sederhana
nilai = 85
if nilai >= 80:
    print("Lulus dengan baik!")
else:
    print("Perlu belajar lebih giat.")

# Contoh 2: Perulangan dengan for
for i in range(3):
    print("Iterasi", i)

# Contoh 3: Perulangan dengan while
count = 0
while count < 3:
    print("Count:", count)
    count += 1`}
        />
      </>
    ),
  },
  {
    id: 5,
    title: "Ringkasan & Langkah Selanjutnya",
    content: (
      <>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mb-6">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 text-lg mb-3">
            Apa yang sudah kita pelajari:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Pengertian dasar struktur kontrol dalam Python.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Cara menggunakan percabangan dengan{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                  if
                </code>
                ,{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                  elif
                </code>
                , dan{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                  else
                </code>
                .
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Pengenalan perulangan menggunakan{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                  for
                </code>{" "}
                dan{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                  while
                </code>
                .
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
            Langkah Selanjutnya:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pada materi berikutnya, kita akan mempelajari tentang fungsi di
            Python. Kamu akan belajar cara membuat dan menggunakan fungsi untuk
            mengorganisir kode agar lebih modular dan mudah dipelihara.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Pratinjau Materi Berikutnya
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Materi <strong>&#34;Fungsi&#34; </strong> akan mengajarkan kamu
              tentang:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>Cara mendefinisikan fungsi</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>Parameter dan argumen fungsi</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>Konsep scope pada fungsi</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

// courses/functions
export const functionsLessonSteps: LessonSteps[] = [
  {
    id: 1,
    title: "Pengenalan Fungsi dalam Python",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Fungsi adalah blok kode yang dapat digunakan kembali untuk melakukan
          tugas tertentu. Dengan menggunakan fungsi, kamu dapat mengelompokkan
          kode yang sering digunakan agar lebih mudah dipelihara dan diuji.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Di Python, fungsi didefinisikan menggunakan kata kunci{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            def
          </code>
          . Setelah fungsi didefinisikan, kamu dapat memanggilnya dengan
          menyebutkan namanya beserta tanda kurung.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
          <CodeBlock
            code={`# Mendefinisikan fungsi sederhana
def sapa(nama):
    """
    Menyapa pengguna dengan nama yang diberikan.
    """
    return f"Halo, {nama}!"
  
# Memanggil fungsi
hasil = sapa("Budi")
print(hasil)  # Output: Halo, Budi!
`}
          ></CodeBlock>
        </div>
        <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Fakta Menarik
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Fungsi di Python adalah <em>first class citizens</em> yang artinya
            fungsi dapat diperlakukan seperti variabel. Kamu bisa menyimpan
            fungsi dalam variabel, mengirimnya sebagai argumen, atau bahkan
            mengembalikannya dari fungsi lain.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Parameter dan Argumen",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Fungsi di Python dapat menerima input berupa parameter. Parameter
          memungkinkan kamu untuk mengirim data ke dalam fungsi. Parameter juga
          bisa memiliki nilai default sehingga tidak wajib diberikan saat
          pemanggilan.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
          <CodeBlock
            code={`def perkenalan(nama, usia=18):
    """
    Mengenalkan seseorang dengan nama dan usia.
    """
    print(f"Halo, saya {nama} dan saya berusia {usia} tahun.")
  
# Pemanggilan fungsi
perkenalan("Andi")           # Menggunakan usia default
perkenalan("Budi", 25)        # Menentukan usia secara eksplisit
`}
          ></CodeBlock>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Pada contoh di atas, parameter{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            usia
          </code>{" "}
          memiliki nilai default 18, sehingga fungsi dapat dipanggil tanpa
          memberikan nilai untuk parameter tersebut.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Nilai Kembalian (Return) dan Docstring",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Fungsi dapat mengembalikan nilai menggunakan kata kunci{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            return
          </code>
          . Selain itu, kamu bisa menambahkan docstring (dalam triple quotes)
          untuk mendokumentasikan fungsi.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
          <CodeBlock
            code={`def tambah(a, b):
    """
    Mengembalikan hasil penjumlahan dari dua angka.
    """
    return a + b
  
# Menggunakan fungsi tambah
hasil = tambah(5, 7)
print("Hasil:", hasil)  # Output: Hasil: 12
  `}
          ></CodeBlock>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Docstring pada fungsi di atas menjelaskan apa yang dilakukan fungsi
          tersebut, sehingga memudahkan pemahaman bagi pengguna lain atau saat
          kamu kembali membaca kode tersebut.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Variabel Lokal dan Global",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Variabel yang didefinisikan di dalam sebuah fungsi bersifat lokal,
          artinya hanya dapat diakses di dalam fungsi tersebut. Sedangkan
          variabel yang didefinisikan di luar fungsi adalah variabel global yang
          dapat diakses di mana saja.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
          <CodeBlock
            code={`x = "global"
  
def contoh():
    x = "lokal"
    print("Di dalam fungsi:", x)
  
contoh()
print("Di luar fungsi:", x)
  `}
          ></CodeBlock>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Pada contoh di atas, variabel{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            x
          </code>{" "}
          yang didefinisikan di dalam fungsi{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
            contoh
          </code>{" "}
          hanya berlaku di dalam fungsi tersebut.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Fungsi Rekursif",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Fungsi rekursif adalah fungsi yang memanggil dirinya sendiri untuk
          menyelesaikan suatu masalah. Teknik ini sering digunakan untuk
          memecahkan masalah yang bisa dipecah menjadi sub-masalah yang lebih
          kecil.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
          <CodeBlock
            code={`def faktorial(n):
    """
    Menghitung faktorial dari sebuah angka secara rekursif.
    """
    if n == 0:
        return 1
    else:
        return n * faktorial(n - 1)
  
print("Faktorial 5:", faktorial(5))  # Output: Faktorial 5: 120
  `}
          ></CodeBlock>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Contoh di atas menggunakan rekursi untuk menghitung faktorial dari
          angka 5.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Fungsi Lambda (Anonim)",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Fungsi lambda adalah fungsi anonim yang dituliskan dalam satu baris
          kode. Fungsi ini sangat berguna untuk operasi sederhana dan sering
          digunakan sebagai argumen untuk fungsi lain.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
          <CodeBlock
            code={`# Fungsi lambda untuk menjumlahkan dua angka
tambah = lambda a, b: a + b
  
print("Hasil lambda:", tambah(3, 4))  # Output: Hasil lambda: 7
  `}
          ></CodeBlock>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Fungsi lambda memungkinkan penulisan fungsi secara ringkas tanpa harus
          menggunakan definisi fungsi standar.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Ringkasan & Langkah Selanjutnya",
    content: (
      <>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mb-6">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 text-lg mb-3">
            Apa yang sudah kita pelajari:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Fungsi dasar dan cara mendefinisikannya menggunakan{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                  def
                </code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Penggunaan parameter, argumen, dan nilai kembali (
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                  return
                </code>
                )
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Perbedaan antara variabel lokal dan global</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Fungsi rekursif dan fungsi lambda (anonim)</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
            Langkah Selanjutnya:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pada materi berikutnya, kita akan mempelajari struktur data array di
            Python. Kamu akan belajar mengenai:
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Pratinjau Materi Berikutnya
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Materi struktur data array akan mencakup:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  <strong>List</strong>: struktur data berurutan yang bersifat
                  mutable
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  <strong>Tuple</strong>: struktur data berurutan yang bersifat
                  immutable
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  <strong>Dictionary</strong>: struktur data berbasis key-value
                  yang tidak berurutan
                </span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

// courses/arrays
export const arraysLessonSteps: LessonSteps[] = [
  {
    id: 1,
    title: "List dalam Python",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>List</strong> adalah struktur data yang dapat menyimpan banyak
          item dalam satu variabel. Item dalam list dapat diubah (mutable) dan
          dapat berisi berbagai tipe data.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          List ditulis dengan tanda kurung siku <code>[]</code>.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Contoh list
buah = ["apel", "jeruk", "pisang"]
print(buah[0])  # Mengakses elemen pertama
buah.append("mangga")  # Menambahkan item
buah.remove("jeruk")   # Menghapus item
print(buah)`}
          />
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
            Fitur & Kegunaan
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Dapat diubah (mutable)</li>
            <li>Dapat menyimpan berbagai tipe data</li>
            <li>
              Memiliki banyak method built-in seperti <code>.append()</code>,{" "}
              <code>.remove()</code>, <code>.sort()</code>, dll.
            </li>
            <li>Sangat cocok untuk daftar yang sering diubah</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Tuple dalam Python",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Tuple</strong> mirip dengan list, tetapi bersifat tetap
          (immutable). Setelah dibuat, isinya tidak bisa diubah.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Tuple ditulis dengan tanda kurung <code>()</code>.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Contoh tuple
warna = ("merah", "hijau", "biru")
print(warna[1])  # Mengakses elemen kedua
warna[0] = "kuning"  # Error! Tuple tidak bisa diubah`}
          />
        </div>

        <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
          <h3 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">
            Fitur & Kegunaan
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Immutability (tidak bisa diubah)</li>
            <li>Lebih cepat dibanding list</li>
            <li>Cocok untuk data tetap seperti koordinat, tanggal, dll.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Dictionary dalam Python",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Dictionary</strong> adalah struktur data yang menyimpan
          pasangan key dan value. Setiap item memiliki &#34;kunci&#34; unik.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Dictionary ditulis menggunakan tanda kurung kurawal{" "}
          <code>{`{}`}</code>.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Contoh dictionary
mahasiswa = {"nama": "Andi", "umur": 20, "jurusan": "Informatika"}
print(mahasiswa["nama"])  # Mengakses data dengan key
mahasiswa["umur"] = 21    # Mengubah nilai
mahasiswa["angkatan"] = 2022  # Menambahkan key-value baru
print(mahasiswa)`}
          />
        </div>

        <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
          <h3 className="font-medium text-green-800 dark:text-green-300 mb-2">
            Fitur & Kegunaan
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Akses cepat melalui key</li>
            <li>Dapat menyimpan struktur data kompleks</li>
            <li>Cocok untuk menyimpan data berlabel seperti JSON</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Ringkasan & Langkah Selanjutnya",
    content: (
      <>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mb-6">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 text-lg mb-3">
            Apa yang sudah kita pelajari:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>List: struktur data fleksibel dan dapat diubah</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Tuple: struktur data tetap yang aman dari perubahan</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Dictionary: pasangan key-value yang efisien</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
            Langkah Selanjutnya:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pada materi selanjutnya, kita akan belajar tentang{" "}
            <strong>Error Handling</strong> dalam Python menggunakan{" "}
            <code>try</code>, <code>except</code>, <code>finally</code>, dan{" "}
            <code>raise</code>. Ini penting untuk menangani situasi di mana
            program bisa mengalami kesalahan agar tidak langsung berhenti.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Pratinjau Materi Berikutnya
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Kita akan mempelajari:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Mendeteksi error dengan blok <code>try</code> dan{" "}
                  <code>except</code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Menjalankan kode apapun di blok <code>finally</code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Menghasilkan error secara manual dengan <code>raise</code>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

// courses/error-handling
export const errorHandlingLessonSteps: LessonSteps[] = [
  {
    id: 1,
    title: "Mengenal Error Handling",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Dalam pemrograman, error handling penting untuk mencegah program
          berhenti tiba-tiba ketika terjadi kesalahan. Python menyediakan
          mekanisme <strong>try-except</strong> untuk menangani error.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Dengan menggunakan <code>try</code>, kita dapat &#34;mencoba&#34;
          menjalankan kode. Jika terjadi error, bagian <code>except</code> akan
          dijalankan sebagai gantinya.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Contoh error handling
try:
  angka = '0'  # Ganti dengan angka yang ingin dibagi
  hasil = 10 / angka
  print("Hasil:", hasil)
except ZeroDivisionError:
  print("Error: Tidak bisa membagi dengan nol!")
except TypeError:
  print("Error: Input harus berupa angka!")`}
          />
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
            Fitur & Kegunaan
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Menangani error dengan aman tanpa menghentikan program</li>
            <li>Meningkatkan keandalan dan pengalaman pengguna</li>
            <li>
              Memungkinkan program tetap berjalan meskipun terjadi kesalahan
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Blok Finally & Raise Error",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Selain <code>try</code> dan <code>except</code>, Python juga
          menyediakan <strong>finally</strong> untuk menjalankan kode apapun
          terlepas dari error, dan <strong>raise</strong> untuk memunculkan
          error secara manual.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          <code>finally</code> berguna untuk membersihkan resource (seperti file
          atau koneksi), dan <code>raise</code> digunakan ketika kita ingin
          membuat aturan khusus yang harus dipatuhi pengguna.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Contoh penggunaan finally dan raise
def cek_umur(umur):
  if umur < 0:
    raise ValueError("Umur tidak boleh negatif")
  else:
    print("Umur valid:", umur)
  
try:
  cek_umur(-5)
except ValueError as e:
  print("Terjadi error:", e)
finally:
  print("Selesai memeriksa umur")`}
          />
        </div>

        <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
          <h3 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">
            Fitur & Kegunaan
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              <code>finally</code> selalu dijalankan, cocok untuk cleanup
            </li>
            <li>
              <code>raise</code> memberikan kontrol lebih pada validasi data
            </li>
            <li>Meningkatkan keamanan dan konsistensi program</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Contoh Kompleks: Validasi Data & Pembagian",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Mari lihat contoh error handling yang lebih kompleks, kita akan
          memproses data list dan menangani error seperti pembagian dengan nol
          dan tipe data tidak valid.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Ini sangat berguna saat memproses data dari database, di mana datanya
          tidak selalu rapi.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Proses list angka, tangani error saat membagi
data = [10, 5, 0, "tiga", 2]
  
# Error handling dikombinasikan dengan perulangan for
for item in data:
  try:
    hasil = 100 / item
    print(f"100 dibagi {item} = {hasil}")
  except ZeroDivisionError:
    print(f"Tidak bisa membagi dengan nol: {item}")
  except TypeError:
    print(f"Tipe data tidak valid untuk pembagian: {item}")
  finally:
    print("Selesai memproses item.\\n")`}
          />
        </div>

        <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">
            Apa yang Dipelajari
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              <code>try</code> digunakan untuk membungkus kode yang rawan error
            </li>
            <li>
              <code>except</code> menangani error spesifik seperti pembagian nol
              dan tipe salah
            </li>
            <li>
              <code>finally</code> tetap dijalankan untuk membersihkan atau
              logging
            </li>
            <li>
              Berguna saat memproses banyak data yang tidak pasti formatnya
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Ringkasan & Langkah Selanjutnya",
    content: (
      <>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mb-6">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 text-lg mb-3">
            Apa yang sudah kita pelajari:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Mendeteksi error menggunakan <code>try</code> dan{" "}
                <code>except</code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Menjalankan kode penting menggunakan <code>finally</code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Membuat error secara manual menggunakan <code>raise</code>
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
            Langkah Selanjutnya:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Selanjutnya, kita akan mempelajari tentang{" "}
            <strong>Object-Oriented Programming (OOP)</strong> dalam Python. Ini
            adalah paradigma pemrograman yang memungkinkan kita membangun
            program dengan struktur yang lebih rapi, modular, dan mudah
            dikelola.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Pratinjau Materi Berikutnya
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Kita akan mempelajari:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>Membuat class dan object di Python</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Menggunakan konstruktor <code>__init__()</code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>Konsep inheritance (pewarisan) dan polymorphism</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

// courses/object-oriented-programming
export const OOPLessonSteps: LessonSteps[] = [
  {
    id: 1,
    title: "Pengenalan OOP: Class dan Object",
    content: (
      <>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800 mb-6">
          <h3 className="font-medium text-green-800 dark:text-green-300 mb-2">
            Selamat! 🎉
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Kamu telah menempuh perjalanan yang luar biasa sejauh ini—memahami
            variabel, kondisi, fungsi, hingga error handling di Python.
            Sekarang, waktunya naik ke level berikutnya:{" "}
            <strong>Object-Oriented Programming (OOP)</strong>! 🚀
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          <strong>Object-Oriented Programming (OOP)</strong> adalah paradigma
          pemrograman yang berfokus pada objek. Objek merepresentasikan entitas
          dalam dunia nyata, dan setiap objek dibangun dari sebuah cetakan yang
          disebut <strong>class</strong>.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Dengan OOP, kita bisa membagi program menjadi bagian-bagian kecil yang
          lebih terstruktur, membuatnya lebih mudah untuk dipelihara dan
          dikembangkan.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Membuat class
class Mahasiswa:
  def __init__(self, nama, jurusan):
    self.nama = nama
    self.jurusan = jurusan
        
  def perkenalan(self):
    print(f"Halo, nama saya {self.nama} dari jurusan {self.jurusan}.")
        
# Membuat object dari class
m1 = Mahasiswa("Ayu", "Informatika")
m1.perkenalan()`}
          />
        </div>
        <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">
            Konsep Penting
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              <strong>Class</strong>: cetakan atau template untuk membuat
              object.
            </li>
            <li>
              <strong>Object</strong>: hasil dari class, memiliki atribut dan
              method.
            </li>
            <li>
              <code>__init__</code>: method khusus yang otomatis dijalankan saat
              object dibuat.
            </li>
            <li>
              <code>self</code>: referensi ke instance (object) saat ini.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Inheritance: Pewarisan Class dalam OOP",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Inheritance</strong> atau pewarisan memungkinkan sebuah class
          mewarisi atribut dan method dari class lain. Ini sangat berguna saat
          membuat class yang memiliki karakteristik dasar yang sama.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Class yang diwarisi disebut <em>parent class</em>, sedangkan class
          yang mewarisi disebut <em>child class</em>.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Parent class
class Mahasiswa:
  def __init__(self, nama):
    self.nama = nama
    
  def sapa(self):
    print(f"Halo, saya {self.nama}.")
    
# Child class
class MahasiswaTI(Mahasiswa):
  def belajar(self):
    print("Saya sedang belajar coding.")
    
# Membuat object dari class turunan
m2 = MahasiswaTI("Rian")
m2.sapa()      # Method dari parent
m2.belajar()   # Method dari child`}
          />
        </div>

        <div className="mt-6 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 className="font-medium text-orange-800 dark:text-orange-300 mb-2">
            Fitur Inheritance
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              Child class dapat menggunakan method dan atribut dari parent
              class.
            </li>
            <li>Kita bisa menambahkan atau menimpa method di child class.</li>
            <li>
              Mendukung <code>super()</code> untuk akses konstruktor parent.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Menggunakan super() dalam Pewarisan",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Fungsi <code>super()</code> digunakan di dalam class turunan untuk
          memanggil method atau konstruktor dari parent class. Ini berguna jika
          kita ingin memperluas fungsionalitas yang sudah ada.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Biasanya digunakan di dalam <code>__init__()</code> agar atribut dari
          parent class tetap terbentuk.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`class Mahasiswa:
  def __init__(self, nama):
    self.nama = nama
    
class MahasiswaTI(Mahasiswa):
  def __init__(self, nama, jurusan):
    super().__init__(nama)  # Panggil __init__ parent
    self.jurusan = jurusan
    
  def info(self):
    print(f"{self.nama} dari jurusan {self.jurusan}")
    
m3 = MahasiswaTI("Budi", "Teknik Informatika")
m3.info()`}
          />
        </div>

        <div className="mt-6 bg-lime-50 dark:bg-lime-900/20 p-4 rounded-lg border border-lime-100 dark:border-lime-800">
          <h3 className="font-medium text-lime-800 dark:text-lime-300 mb-2">
            Kenapa menggunakan super()?
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Menghindari penulisan ulang kode parent</li>
            <li>Memastikan konstruktor parent tetap berjalan</li>
            <li>
              Mendukung struktur pewarisan kompleks (multiple inheritance)
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Encapsulation: Membatasi Akses dalam Class",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Encapsulation</strong> adalah prinsip OOP yang membatasi akses
          langsung ke data dalam sebuah objek. Tujuannya adalah menjaga data
          tetap aman dan tidak bisa diubah sembarangan.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Di Python, kita bisa membuat atribut <strong>privat</strong> dengan
          menambahkan underscore ganda <code>__</code> di depan nama atribut.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`class AkunBank:
  def __init__(self, saldo_awal):
    self.__saldo = saldo_awal  # atribut privat
    
  def lihat_saldo(self):
    print(f"Saldo saat ini: {self.__saldo}")
    
  def setor(self, jumlah):
    if jumlah > 0:
      self.__saldo += jumlah
    
akun = AkunBank(100000)
akun.lihat_saldo()
akun.setor(50000)
akun.lihat_saldo()
print(akun.__saldo)  # Error: tidak bisa diakses langsung`}
          />
        </div>

        <div className="mt-6 bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-100 dark:border-pink-800">
          <h3 className="font-medium text-pink-800 dark:text-pink-300 mb-2">
            Fitur Encapsulation
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Melindungi data internal class</li>
            <li>Mengontrol akses data melalui method (getter/setter)</li>
            <li>Membantu menjaga validitas dan keamanan data</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Polymorphism: Satu Interface, Banyak Implementasi",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Polymorphism</strong> memungkinkan kita menggunakan method
          yang sama dengan perilaku yang berbeda tergantung pada objeknya.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Dalam Python, polymorphism sering muncul saat kita membuat method
          dengan nama yang sama di beberapa class berbeda.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`class Burung:
  def suara(self):
    print("Burung bersuara...")
    
class Merpati(Burung):
  def suara(self):
    print("Guk guk!")
    
class Elang(Burung):
  def suara(self):
    print("Screech!")
    
# Polymorphism in action
def uji_suara(burung):
  burung.suara()
    
uji_suara(Merpati())
uji_suara(Elang())`}
          />
        </div>

        <div className="mt-6 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 className="font-medium text-orange-800 dark:text-orange-300 mb-2">
            Kapan Polymorphism Berguna?
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Saat ingin menulis fungsi umum untuk objek berbeda</li>
            <li>Memudahkan ekspansi dan modifikasi kode</li>
            <li>
              Mendukung prinsip desain &#34;Open for Extension, Closed for
              Modification&#34;
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 6,
    title: "Ringkasan OOP & Langkah Selanjutnya",
    content: (
      <>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border border-yellow-100 dark:border-yellow-800 mb-6">
          <h3 className="font-medium text-yellow-800 dark:text-yellow-300 text-lg mb-3">
            Apa yang sudah kita pelajari:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Membuat dan menggunakan <strong>class</strong> dan{" "}
                <strong>object</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Menggunakan <code>__init__</code> untuk menginisialisasi atribut
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Menerapkan <strong>inheritance</strong> dan <code>super()</code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                Memahami konsep <strong>encapsulation</strong> dan{" "}
                <strong>polymorphism</strong>
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
            Langkah Selanjutnya:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Kita akan mulai mengeksplorasi <strong>Pemrosesan Data</strong> di
            Python menggunakan teknik ringkas dan efisien seperti{" "}
            <code>list comprehension</code> dan <code>lambda function</code>.
            Ini akan membantu kamu memproses data dengan cara yang lebih baik
            lagi!
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Pratinjau Materi Berikutnya
            </h4>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Menyaring dan memanipulasi data dengan{" "}
                  <code>list comprehension</code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Menulis fungsi cepat dan singkat dengan <code>lambda</code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                <span>
                  Kombinasi <code>lambda</code> dengan <code>map()</code>,{" "}
                  <code>filter()</code>, dan <code>sorted()</code>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

// courses/data-processing
export const dataProcessingLessonSteps: LessonSteps[] = [
  {
    id: 1,
    title: "List Comprehension",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>List Comprehension</strong> adalah cara singkat dan elegan
          untuk membuat list baru dari iterable yang ada. Ini adalah gaya
          Pythonic yang lebih ringkas dibandingkan loop biasa.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Struktur dasarnya: <code>[ekspresi for item in iterable]</code>
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Membuat list kuadrat dari 0-4
kuadrat = [x**2 for x in range(5)]
print(kuadrat)  # Output: [0, 1, 4, 9, 16]
      
# Filter hanya bilangan genap
genap = [x for x in range(10) if x % 2 == 0]
print(genap)  # Output: [0, 2, 4, 6, 8]`}
          />
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
            Keunggulan List Comprehension
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Lebih singkat dan mudah dibaca</li>
            <li>Menggabungkan loop dan conditional dalam satu baris</li>
            <li>Sangat berguna untuk transformasi data</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Dictionary Comprehension",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Seperti <strong>List Comprehension</strong>, Python juga memiliki{" "}
          <strong>Dictionary Comprehension</strong> untuk membuat dictionary
          secara ringkas.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`# Membuat dictionary kuadrat dari 1-5
kuadrat = {x: x**2 for x in range(1, 6)}
print(kuadrat)  # Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
      
# Hanya untuk bilangan ganjil
ganjil_kuadrat = {x: x**2 for x in range(1, 6) if x % 2 != 0}
print(ganjil_kuadrat)  # Output: {1: 1, 3: 9, 5: 25}`}
          />
        </div>

        <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
          <h3 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">
            Kapan Menggunakan Dictionary Comprehension?
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Transformasi data dari list ke dictionary</li>
            <li>Membersihkan atau memfilter data sebelum digunakan</li>
            <li>Menggabungkan proses looping dan mapping</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Map, filter, dan reduce",
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Python menyediakan tiga fungsi powerful untuk memproses data secara
          fungsional: <strong>map</strong>, <strong>filter</strong>, dan{" "}
          <strong>reduce</strong>.
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`from functools import reduce
      
# map: menerapkan fungsi ke semua item
angka = [1, 2, 3, 4]
hasil_map = list(map(lambda x: x * 2, angka))
print(hasil_map)  # [2, 4, 6, 8]
      
# filter: menyaring item berdasarkan kondisi
hasil_filter = list(filter(lambda x: x % 2 == 0, angka))
print(hasil_filter)  # [2, 4]
      
# reduce: menggabungkan semua item menjadi satu nilai
hasil_reduce = reduce(lambda a, b: a + b, angka)
print(hasil_reduce)  # 10`}
          />
        </div>

        <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
          <h3 className="font-medium text-green-800 dark:text-green-300 mb-2">
            Perbedaan Utama
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              <code>map()</code>: ubah semua item dalam iterable
            </li>
            <li>
              <code>filter()</code>: ambil hanya item yang memenuhi kondisi
            </li>
            <li>
              <code>reduce()</code>: gabungkan semua item jadi satu hasil
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Ringkasan & Langkah Selanjutnya",
    content: (
      <>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mb-6">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 text-lg mb-3">
            Ringkasan Materi
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>List Comprehension</strong>: cara ringkas membuat list
                baru
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lambda Function</strong>: fungsi singkat tanpa nama
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Map, filter, reduce</strong>: alat bantu untuk
                pemrosesan data berbasis fungsi
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
            Langkah Selanjutnya: Mini Project
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Sekarang saatnya untuk menantang kemampuanmu! Kita akan membuat{" "}
            <strong>mini project</strong> Python berbasis PyScript langsung di
            browser, tanpa perlu instalasi tambahan.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
            <h4 className="font-medium text-green-800 dark:text-green-300 flex items-center gap-2">
              🎯 Tujuan Mini Project
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Bangunlah sebuah{" "}
              <strong>Kalkulator Statistik & Konversi Data</strong> sederhana:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-green-500" />
                Menghitung rata-rata, maksimum, dan minimum dari daftar angka.
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-green-500" />
                Melakukan konversi suhu (C ↔ F) menggunakan fungsi modular.
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-green-500" />
                Membuat kode Python untuk mengenkripsi password.
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Materi yang Akan Digunakan
            </h4>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                Perulangan dan kondisi dalam Python.
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                Menggunakan <code>import</code> dan <code>as</code> untuk
                memanggil fungsi
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-blue-500" />
                Menerapkan logika dari topik <strong>functions</strong> dan{" "}
                <strong>pemrosesan data</strong>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];
