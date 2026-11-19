import type { Metadata } from "next";
import TentangHero from "@/components/sections/tentang/TentangHero";
import WhoAreWe from "@/components/sections/tentang/WhoAreWe";
import Sejarah from "@/components/sections/tentang/Sejarah";
import FotoDivisi from "@/components/sections/tentang/FotoDivisi";

export const metadata: Metadata = {
  title: "Tentang | Batam Linux User Group",
};

const glow =
  "radial-gradient(closest-side, rgba(200,155,0,.8) 0%, rgba(200,155,0,.6) 25%, rgba(200,155,0,.4) 50%, rgba(200,155,0,.2) 75%, rgba(200,155,0,.1) 87.5%, rgba(200,155,0,0) 100%)";

export default function TentangPage() {
  return (
    // Latar hitam pekat (beda dengan beranda), cahaya dipotong di batas halaman
    <div className="relative overflow-hidden bg-black font-(family-name:--font-inter) text-white">
      <div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute -right-113 top-206.25 hidden h-302.5 w-187.5 lg:block"
      />
      <div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute -left-108.75 top-[1641px] hidden h-302.5 w-187.5 lg:block"
      />

      <TentangHero />
      <div className="mt-12 lg:mt-22.75">
        <WhoAreWe />
      </div>
      <div className="mt-12 lg:mt-[91.5px]">
        <Sejarah />
      </div>

      {/* Judul pengurus harian (teks di Figma: Inter Bold 65 / 75px) */}
      <h2 className="mt-20 px-6 pb-24 text-center font-bold leading-[normal] text-white lg:mt-67.75 lg:pb-43">
        <span className="block text-[clamp(1.5rem,6vw,2rem)] lg:text-[32.5px]">
          Badan Pengurus <span className="lg:text-[30px]">Harian</span>
        </span>
        <span className="block text-[clamp(1.6rem,7vw,2.3rem)] lg:text-[37.5px]">
          <span className="text-[#ffda23]">Batam Linux Group </span>2026
        </span>
      </h2>

      {/* Carousel foto per divisi (Frame 28) */}
      <FotoDivisi />
    </div>
  );
}
