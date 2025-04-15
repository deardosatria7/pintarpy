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

export default function DataProcessingContent() {
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
            <PyScriptTerminal
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
            <PyScriptTerminal
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
            <PyScriptTerminal
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
                  Menerapkan logika dari topik <strong>
                    functions
                  </strong> dan <strong>pemrosesan data</strong>
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
        courseId: courseId ?? "cm9b0ichb0007txs8ov4ndyuz",
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
      pageTitle="Data Processing"
    >
      <div className="flex flex-col w-full space-y-6 p-4 md:p-8">
        {/* Header dengan Progress */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
                Data Processing
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
                Di materi ini, kamu akan belajar mengenai Pemrosesan Data di
                Python menggunakan teknik ringkas dan efisien seperti list
                comprehension dan dictionary comprehension.
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
                await handleUpdateProgress("cm9b0icjv0008txs8o4x4o9e2", 0);
                router.push("/courses/mini-projects");
              }}
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
