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
  Users,
  Briefcase,
  Info,
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

export default function IntroductionContent() {
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
      title: "Apa itu Python?",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            Python adalah bahasa pemrograman tingkat tinggi yang mudah dibaca
            dan dipahami, cocok untuk pemula maupun profesional.
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
              Inggris &#34;Monty Python&#39;s Flying Circus&#34; yang disukai
              oleh Guido van Rossum, sang pencipta bahasa ini.
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
                  Dukungan komunitas yang luas dengan banyak tutorial dan
                  library.
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
        courseId: courseId ?? "cm9b0ibwp0000txs80yikyep5",
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
      pageTitle="Pengenalan Python"
    >
      <div className="flex flex-col w-full space-y-6 p-4 md:p-8">
        {/* Header dengan Progress */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
                Pengenalan Python
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
                Di materi pertama ini, kamu akan mengenal dasar-dasar Python:
                bahasa pemrograman yang mudah dipelajari, fleksibel, dan sangat
                populer!
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm self-start">
              <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                30 menit
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
                handleUpdateProgress("cm9b0ic1z0001txs8hlw7vv0q", 0);
                handleGoToCourse("variables-and-data-types");
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
