"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  BookOpen,
  CheckCircle,
  Clock,
  PlayCircle,
  LightbulbIcon,
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

export default function ControlStructuresContent() {
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

  // Definisi konten untuk setiap tahap pembelajaran struktur kontrol dalam Python
  const lessonSteps = [
    {
      id: 1,
      title: "Pengantar Struktur Kontrol",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            Struktur kontrol adalah fondasi dalam pemrograman yang menentukan
            alur eksekusi kode berdasarkan kondisi tertentu atau pengulangan.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Dengan memahami struktur kontrol, kamu akan bisa membuat program
            yang lebih dinamis dan interaktif, seperti memutuskan jalur program
            dengan kondisi atau melakukan perulangan hingga syarat tertentu
            tercapai.
          </p>
          <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
            <h3 className="font-medium text-purple-800 dark:text-purple-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Fakta Menarik
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Struktur kontrol yang paling sering digunakan adalah percabangan
              dan perulangan, yang memungkinkan program untuk
              &#34;memutuskan&#34; tindakan berdasarkan kondisi tertentu.
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
            berdasarkan kondisi. Di Python, struktur percabangan dasar
            menggunakan{" "}
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
              rentang nilai. Perhatikan indentasi yang penting dalam Python
              untuk menentukan blok kode.
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
              Menurutmu apa yang akan ditampilkan ketika kode di atas
              dijalankan?
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
          <PyScriptTerminal
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
              Python. Kamu akan belajar cara membuat dan menggunakan fungsi
              untuk mengorganisir kode agar lebih modular dan mudah dipelihara.
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
        courseId: courseId ?? "cm9b0ic4l0002txs8r19rezrq",
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
      pageTitle="Struktur Kontrol"
    >
      <div className="flex flex-col w-full space-y-6 p-4 md:p-8">
        {/* Header dengan Progress */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
                Struktur Kontrol
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
                Selanjutnya kita akan belajar struktur kontrol dalam Python:
                Belajar menggunakan if, else, elif, serta perulangan for dan
                while.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm self-start">
              <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                60 menit
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
                      //   onClick={() => {
                      //     setCurrentStep(step.id);
                      //   }}
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
                handleUpdateProgress("cm9b0ic7d0003txs8xg8ziq6b", 0);
              }}
              href="/courses/functions"
            ></NextCourseButton>
          )}
        </div>
        {/* This is required for the Sonner toast notifications to work */}
        <Toaster />
      </div>
    </SidebarNavigation>
  );
}
