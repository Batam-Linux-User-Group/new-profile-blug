import Image from "next/image";
import OscButton from "@/components/ui/OscButton";

export default function TentangHero() {
  return (
    <section className="relative">
      {/* Foto hero: selalu mulai dari y=0 (navbar melayang di atasnya) */}
      <div
        style={{
          background:
            "linear-gradient(130deg, #f7f3f3 48%, #ffe08c 75.6%, #f9d00a 103%)",
        }}
        className="relative h-90 overflow-hidden rounded-b-[56px] sm:h-115 lg:h-214.5 lg:rounded-b-[118px]"
      >
        <Image
          src="/images/tentang/bg-hero-new2.svg"
          alt="Gedung Politeknik Negeri Batam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
 
  {/* <Image
          src="/images/tentang/tentang.svg"
          alt="Gedung Politeknik Negeri Batam"
          fill
          priority
          sizes="100vw"
          className="object-bottom"
        /> */}
      </div>

      {/* Tombol Daftar OSC: pembungkus absolute milik section ini,
          jadi tidak ikut aliran layout dan tidak mendorong foto */}
      <div className="absolute right-3 top-[92px] z-10 lg:right-[60px] lg:top-[41.5px]">
        <OscButton />
      </div>
    </section>
  );
}
