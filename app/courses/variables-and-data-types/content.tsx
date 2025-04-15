"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  BookOpen,
  CheckCircle,
  Clock,
  Code,
  PlayCircle,
  Info,
  LightbulbIcon,
  Circle,
  List,
  Type,
  Variable,
} from "lucide-react";

import SidebarNavigation from "@/components/sidebar-navigation";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList } from "@/components/ui/tabs";
import PyScriptTerminal from "@/components/pyscipt-terminal";
import {
  PrevButton,
  NextButton,
  NextCourseButton,
} from "@/components/button-courses-navigation";
import axios from "axios";
import { Toaster } from "sonner";
import { showErrorToast } from "@/components/ui/error-toast";

export default function VariablesDataTypesContent() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "User",
    email: "",
    image: "https://via.placeholder.com/150",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Fetch user data on component mount
    const checkAuth = async () => {
      try {
        // Replace this with your actual auth check method
        const response = await axios.get("/api/fetch-user-data");
        const userData = await response.data.data;
        setUserData({
          name: userData.name,
          email: userData.email,
          image: userData.image,
        });
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          console.error("Authentication error:", error.response);
          router.push(
            `/error?message=${error.response.data.message}&title=${error.response.data.title}&code=${error.response.status}&showRefresh=true&returnUrl=/login`
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Definisi konten untuk setiap tahap pembelajaran
  const lessonSteps = [
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
            Untuk membuat variabel, gunakan tanda sama dengan (=) untuk
            memberikan nilai.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
            <PyScriptTerminal
              code={`# Membuat variabel
nama = "Budi"
umur = 25
tinggi = 175.5
  
# Menggunakan variabel
print("Nama:", nama)
print("Umur:", umur, "tahun")
print("Tinggi:", tinggi, "cm")`}
            ></PyScriptTerminal>
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
            data menentukan jenis nilai yang dapat disimpan dan operasi yang
            dapat dilakukan.
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
            <PyScriptTerminal
              code={`nama = "Budi"
print(type(nama))  # Output: <class 'str'>
  
umur = 25
print(type(umur))  # Output: <class 'int'>`}
            ></PyScriptTerminal>
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
              lainnya. Python menyediakan fungsi bawaan untuk konversi tipe
              data.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <PyScriptTerminal
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
            ></PyScriptTerminal>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Coba Sendiri:
            </h3>
            <div className="bg-gray-50 dark:bg-gray-800/80 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Cobalah kode berikut di interpreter Python:
              </p>
              <PyScriptTerminal
                code={`# Konversi string ke float
tinggi_str = "175.5"
tinggi_float = float(tinggi_str)
tinggi_meter = tinggi_float / 100
print("Tinggi Anda dalam meter adalah:", tinggi_meter, "m")`}
              ></PyScriptTerminal>
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
              operasi matematika dengan input pengguna, Anda perlu
              mengkonversinya ke tipe numerik terlebih dahulu.
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
            Selain tipe data dasar, Python juga memiliki struktur data yang
            dapat menyimpan kumpulan nilai. Berikut adalah beberapa struktur
            data yang umum digunakan.
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
                  Gunakan <strong>Dictionary</strong> ketika Anda perlu
                  menyimpan data dengan pasangan key-value untuk akses cepat.
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
                <span>
                  Tipe data dasar: string, integer, float, dan boolean
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Cara mengkonversi antar tipe data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Struktur data dasar: list, tuple, dictionary, dan set
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
              Langkah Selanjutnya:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pada materi berikutnya, kita akan mempelajari tentang operator dan
              ekspresi dalam Python. Kamu akan belajar cara melakukan operasi
              matematika, perbandingan, dan logika.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Pratinjau Materi Berikutnya
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                &#34;Operator dan Ekspresi&#34; akan mengajarkan kamu tentang:
              </p>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-500" />
                  <span>Operator aritmatika (+, -, *, /, %)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-500" />
                  <span>Operator perbandingan (==, !=, &gt;, &lt;)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-500" />
                  <span>Operator logika (and, or, not)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-500" />
                  <span>Prioritas operator dalam ekspresi</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Mendapatkan konten untuk tahap saat ini
  const currentLesson =
    lessonSteps.find((step) => step.id === currentStep) || lessonSteps[0];

  // Menghitung progress berdasarkan tahap saat ini
  const stepProgress = Math.round((currentStep / lessonSteps.length) * 100);

  // handler update progress user
  const handleUpdateProgress = async (courseId?: string, progress?: 0) => {
    try {
      // Replace with your actual API call to update progress
      await axios.post("/api/update-user-progress", {
        courseId: courseId ?? "cm9b0ic1z0001txs8hlw7vv0q",
        progress: progress ?? stepProgress,
      });
      console.log(`Progress user ${userData.name} updated to ${stepProgress}%`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Failed to update progress:", error);
        showErrorToast({
          title: "Gagal menyimpan progress anda.",
          description: `Silahkan coba lagi nanti. Pesan: ${error.response?.data?.message}`,
        });
      }
    }
  };

  // Add these functions before the return statement
  const handlePrevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
    }
  };

  const handleNextStep = () => {
    if (currentStep < lessonSteps.length) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <SidebarNavigation
      name={userData.name}
      email={userData.email}
      image={userData.image}
      pageTitle="Variabel dan Tipe Data"
    >
      <div className="flex flex-col w-full space-y-6 p-4 md:p-8">
        {/* Header dengan Progress */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
                Variabel dan Tipe Data
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
                Di materi kedua, kamu akan belajar berbagai tipe data seperti
                string, integer, float, dan boolean.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm self-start">
              <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                45 menit
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-200">
                Progress Materi
              </span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                {stepProgress}%
              </span>
            </div>
            <Progress value={stepProgress} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>
                Tahap {currentStep} dari {lessonSteps.length}
              </span>
              <span>{stepProgress}% selesai</span>
            </div>
          </div>
        </div>

        {/* Navigasi Tahap */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <Tabs defaultValue={currentStep.toString()} className="w-full">
              <div className="px-4 py-2 overflow-x-auto">
                <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                  {lessonSteps.map((step) => (
                    <button
                      key={step.id}
                      // onClick={() => {
                      //   setCurrentStep(step.id);
                      // }}
                      className={`
                        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
                        ${
                          currentStep === step.id
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300"
                            : "text-gray-600 dark:text-gray-400"
                        }
                        ${
                          step.id < currentStep
                            ? "text-green-600 dark:text-green-400"
                            : ""
                        }
                      `}
                    >
                      {step.id < currentStep && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      {step.id === currentStep && (
                        <PlayCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      )}
                      {step.id > currentStep && (
                        <Circle className="h-4 w-4 text-gray-400" />
                      )}
                      <span>{step.title}</span>
                    </button>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </div>

          {/* Konten Materi */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {currentLesson.title}
            </h2>
            <div className="space-y-4">{currentLesson.content}</div>
          </div>
        </div>

        {/* Navigasi Bawah */}
        <div className="flex justify-between mt-4">
          {currentStep > 1 ? (
            <PrevButton
              variant="outline"
              className="gap-1 hover:cursor-pointer"
              onClick={handlePrevStep}
            ></PrevButton>
          ) : (
            <PrevButton
              className="gap-1 hover:cursor-pointer"
              disabled={true}
            ></PrevButton>
          )}
          {currentStep < lessonSteps.length ? (
            <NextButton
              className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:text-white dark:hover:bg-purple-700 gap-1 hover:cursor-pointer"
              onClick={() => {
                handleUpdateProgress();
                handleNextStep();
              }}
            ></NextButton>
          ) : (
            <NextCourseButton
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 dark:text-white gap-1"
              onClick={() => {
                handleUpdateProgress();
                handleUpdateProgress("cm9b0ic4l0002txs8r19rezrq", 0);
              }}
              href="/courses/control-structures"
            ></NextCourseButton>
          )}
        </div>
        {/* This is required for the Sonner toast notifications to work */}
        <Toaster />
      </div>
    </SidebarNavigation>
  );
}
