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

export default function ArraysContent() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "User",
    email: "",
    image: "https://via.placeholder.com/150",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      title: "List dalam Python",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>List</strong> adalah struktur data yang dapat menyimpan
            banyak item dalam satu variabel. Item dalam list dapat diubah
            (mutable) dan dapat berisi berbagai tipe data.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            List ditulis dengan tanda kurung siku <code>[]</code>.
          </p>

          <div className="mt-4">
            <PyScriptTerminal
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
            <PyScriptTerminal
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
            <PyScriptTerminal
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

  // Mendapatkan konten untuk tahap saat ini
  const currentLesson =
    lessonSteps.find((step) => step.id === currentStep) || lessonSteps[0];

  // Menghitung progress berdasarkan tahap saat ini
  const stepProgress = Math.round((currentStep / lessonSteps.length) * 100);

  // handler update progress user
  const handleUpdateProgress = async (courseId?: string, progress?: 0) => {
    try {
      setIsSubmitting(true);
      // Replace with your actual API call to update progress
      await axios.post("/api/update-user-progress", {
        courseId: courseId ?? "cm9b0ic9q0004txs8mudwhsln",
        progress: progress ?? stepProgress,
      });
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
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
      pageTitle="List, Tuple, dan Dictionary"
    >
      <div className="flex flex-col w-full space-y-6 p-4 md:p-8">
        {/* Header dengan Progress */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
                List, tuple, dan dictionary
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
                Di materi ini, kamu akan belajar mengenai struktur data dalam
                python yang dapat menyimpan banyak data dalam satu variabel.
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
              onClick={async () => {
                await handleUpdateProgress();
                handleNextStep();
              }}
              isLoading={isSubmitting}
            ></NextButton>
          ) : (
            <NextCourseButton
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 dark:text-white gap-1"
              onClick={async () => {
                await handleUpdateProgress();
                await handleUpdateProgress("cm9b0iccd0005txs8i1b5yokv", 0);
              }}
              href="/courses/error-handling"
              isLoading={isSubmitting}
            ></NextCourseButton>
          )}
        </div>
        {/* This is required for the Sonner toast notifications to work */}
        <Toaster />
      </div>
    </SidebarNavigation>
  );
}
