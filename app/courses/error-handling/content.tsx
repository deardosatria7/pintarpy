"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  BookOpen,
  CheckCircle,
  Clock,
  PlayCircle,
  Circle,
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

export default function ErrorHandlingContent() {
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

  const lessonSteps = [
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
            menjalankan kode. Jika terjadi error, bagian <code>except</code>{" "}
            akan dijalankan sebagai gantinya.
          </p>

          <div className="mt-4">
            <PyScriptTerminal
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
            <code>finally</code> berguna untuk membersihkan resource (seperti
            file atau koneksi), dan <code>raise</code> digunakan ketika kita
            ingin membuat aturan khusus yang harus dipatuhi pengguna.
          </p>

          <div className="mt-4">
            <PyScriptTerminal
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
            Ini sangat berguna saat memproses data dari database, di mana
            datanya tidak selalu rapi.
          </p>

          <div className="mt-4">
            <PyScriptTerminal
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
                <code>try</code> digunakan untuk membungkus kode yang rawan
                error
              </li>
              <li>
                <code>except</code> menangani error spesifik seperti pembagian
                nol dan tipe salah
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
              <strong>Object-Oriented Programming (OOP)</strong> dalam Python.
              Ini adalah paradigma pemrograman yang memungkinkan kita membangun
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
        courseId: courseId ?? "cm9b0iccd0005txs8i1b5yokv",
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

  // handler untuk navigasi ke course selanjutnya
  const handleGoToCourse = (hrefLink: string) => {
    router.refresh();
    router.push(`/courses/${hrefLink}`);
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
      pageTitle="Error Handling"
    >
      <div className="flex flex-col w-full space-y-6 p-4 md:p-8">
        {/* Header dengan Progress */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
                Error Handling
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
                Di materi ini, kamu akan belajar mengenai error handling dalam
                Python. Nantinya kamu dapat tangani error dengan try, except,
                dan menulis program yang lebih robust dan professional.
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
                handleUpdateProgress("cm9b0icer0006txs8nwm29xat", 0);
                handleGoToCourse("object-oriented-programming");
              }}
            ></NextCourseButton>
          )}
        </div>
        {/* This is required for the Sonner toast notifications to work */}
        <Toaster />
      </div>
    </SidebarNavigation>
  );
}
