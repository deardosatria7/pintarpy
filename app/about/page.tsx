import {
  Zap,
  Rocket,
  Code,
  Users,
  MessageSquare,
  Heart,
  Globe,
  Mail,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BackButton from "@/components/back-button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import defaultAvatar from "@/public/default-avatar.png";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl transition-colors duration-300">
      <div className="w-full flex justify-between items-center mb-8">
        <BackButton className="hover:cursor-pointer" />
        <ThemeToggle />
      </div>
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-800 dark:to-pink-800 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent p-2">
            Tentang PintarPy
          </h1>
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Platform belajar Python gratis dengan compiler terintegrasi untuk
          semua orang yang ingin mempelajari Python.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-purple-700 dark:text-purple-400">
              Misi Kami
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              PintarPy lahir dari keyakinan bahwa pemrograman seharusnya dapat
              diakses oleh semua orang. Misi kami adalah menyediakan platform
              belajar Python yang gratis, interaktif, dan mudah digunakan untuk
              membantu siapa saja memulai perjalanan mereka dalam dunia
              pemrograman.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kami percaya bahwa dengan menyediakan alat yang tepat dan
              lingkungan belajar yang mendukung, setiap orang dapat menguasai
              keterampilan pemrograman yang sangat dibutuhkan di era digital
              ini.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-10 rounded-full shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1">
              <Zap
                size={120}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-700 dark:text-purple-400">
          Fitur Unggulan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Python Compiler
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Jalankan kode Python langsung di browser tanpa perlu
                  menginstal apapun. Belajar menjadi lebih mudah dan cepat.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Komunitas Belajar
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Bergabunglah dengan komunitas pembelajar Python untuk berbagi
                  pengetahuan dan mendapatkan bantuan.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Akses Gratis
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Semua materi dan alat tersedia secara gratis untuk siapa saja,
                  di mana saja, kapan saja.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-700 dark:text-purple-400">
          Tim Kami
        </h2>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-10 shadow-md">
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            PintarPy diawali dari sebuah project tugas akhir mahasiswa yang
            dibimbing oleh dua dosen yang berpengalaman di bidangnya. Kami
            adalah sekelompok pengembang perangkat lunak dan pendidik yang
            berkomitmen untuk membuat pembelajaran pemrograman lebih mudah
            diakses dan menyenangkan bagi semua orang. PintarPy telah berkembang
            menjadi platform yang lebih besar dengan dukungan dari berbagai
            pihak.
          </p>

          {/* Team Photos */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
              Pendiri & Pengembang Utama
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6">
              {/* Founder 1 */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-gray-800 shadow-lg transform transition-transform hover:scale-105">
                  <Image
                    src={defaultAvatar}
                    alt="Foto Pendiri 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200">
                  Nurcahya Pradana
                </h4>
                <p className="text-purple-600 dark:text-purple-400 text-sm">
                  Dosen Pembimbing
                </p>
              </div>

              {/* Founder 2 */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-gray-800 shadow-lg transform transition-transform hover:scale-105">
                  <Image
                    src={defaultAvatar}
                    alt="Foto Pendiri 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200">
                  Puspanda Hatta
                </h4>
                <p className="text-purple-600 dark:text-purple-400 text-sm">
                  Dosen Pembimbing
                </p>
              </div>

              {/* Developer 1 */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-gray-800 shadow-lg transform transition-transform hover:scale-105">
                  <Image
                    src={defaultAvatar}
                    alt="Foto Pendiri 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200">
                  Deardo Satria
                </h4>
                <p className="text-purple-600 dark:text-purple-400 text-sm">
                  Lead Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-700 dark:text-purple-400">
          Nilai-Nilai Kami
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start">
            <Heart className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Aksesibilitas
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kami percaya bahwa pendidikan pemrograman harus tersedia untuk
                semua orang, tanpa memandang latar belakang atau kemampuan
                finansial.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start">
            <MessageSquare className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Kreativitas
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kami mendorong pembelajaran yang mengedepankan kreativitas dan
                saling kolaboratif untuk pertumbuhan bersama.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start">
            <Code className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Praktik Langsung
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kami percaya bahwa cara terbaik untuk belajar adalah dengan
                praktik langsung, itulah mengapa kami menyediakan compiler
                Python terintegrasi.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start">
            <Rocket className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Inovasi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kami terus berinovasi untuk meningkatkan pengalaman belajar dan
                menyediakan alat terbaik untuk para pembelajar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-400">
          Hubungi Kami
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Punya pertanyaan atau saran? Kami senang mendengar dari Anda! Hubungi
          kami melalui email atau media sosial.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white shadow-md hover:shadow-lg transition-all">
            <Mail className="mr-2 h-4 w-4" /> Kirim Email
          </Button>
          <Button
            variant="outline"
            className="border-purple-300 dark:border-purple-700 text-gray-800 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/50 shadow-md hover:shadow-lg transition-all"
          >
            <Share2 className="mr-2 h-4 w-4" /> Ikuti Media Sosial
          </Button>
        </div>
      </section>
    </main>
  );
}
