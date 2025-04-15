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

export default function OOPContent() {
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

  const lessonSteps = [
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
            pemrograman yang berfokus pada objek. Objek merepresentasikan
            entitas dalam dunia nyata, dan setiap objek dibangun dari sebuah
            cetakan yang disebut <strong>class</strong>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Dengan OOP, kita bisa membagi program menjadi bagian-bagian kecil
            yang lebih terstruktur, membuatnya lebih mudah untuk dipelihara dan
            dikembangkan.
          </p>

          <div className="mt-4">
            <PyScriptTerminal
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
                <code>__init__</code>: method khusus yang otomatis dijalankan
                saat object dibuat.
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
            <strong>Inheritance</strong> atau pewarisan memungkinkan sebuah
            class mewarisi atribut dan method dari class lain. Ini sangat
            berguna saat membuat class yang memiliki karakteristik dasar yang
            sama.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Class yang diwarisi disebut <em>parent class</em>, sedangkan class
            yang mewarisi disebut <em>child class</em>.
          </p>

          <div className="mt-4">
            <PyScriptTerminal
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
            memanggil method atau konstruktor dari parent class. Ini berguna
            jika kita ingin memperluas fungsionalitas yang sudah ada.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Biasanya digunakan di dalam <code>__init__()</code> agar atribut
            dari parent class tetap terbentuk.
          </p>

          <div className="mt-4">
            <PyScriptTerminal
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
            <strong>Encapsulation</strong> adalah prinsip OOP yang membatasi
            akses langsung ke data dalam sebuah objek. Tujuannya adalah menjaga
            data tetap aman dan tidak bisa diubah sembarangan.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Di Python, kita bisa membuat atribut <strong>privat</strong> dengan
            menambahkan underscore ganda <code>__</code> di depan nama atribut.
          </p>

          <div className="mt-4">
            <PyScriptTerminal
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
            <PyScriptTerminal
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
                  Menggunakan <code>__init__</code> untuk menginisialisasi
                  atribut
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Menerapkan <strong>inheritance</strong> dan{" "}
                  <code>super()</code>
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
        courseId: courseId ?? "cm9b0icer0006txs8nwm29xat",
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
      pageTitle="OOP Python"
    >
      <div className="flex flex-col w-full space-y-6 p-4 md:p-8">
        {/* Header dengan Progress */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
                OOP (Object Oriented Programming)
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
                Di materi ini, kamu akan belajar mengenai Object Oriented
                Programming dalam Python. Kita akan belajar dasar-dasar class,
                objek, inheritance, dan encapsulation di Python.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm self-start">
              <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                90 menit
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
                await handleUpdateProgress("cm9b0ichb0007txs8ov4ndyuz", 0);
                router.push("/courses/data-processing");
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
