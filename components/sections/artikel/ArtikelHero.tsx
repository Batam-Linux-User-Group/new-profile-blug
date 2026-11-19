import Image from "next/image";
import Link from "next/link";

/*
 * Bagian paling atas halaman Artikel (Rectangle 82 di Figma): foto gedung + gradasi, sudut bawah
 * melengkung, tombol Login di kanan atas. Navbar sudah dari layout.
 *
 * Gambar (public/images/artikel/):
 *   hero-bg.png -> export node "Rectangle 82" (1:1777) di frame Artikel apa adanya
 */
export default function ArtikelHero() {
  return (
    <section className="relative">
      <div
        style={{ background: "linear-gradient(139.7deg, #f7f3f3 37%, #f9d00a 65.7%)" }}
        className="relative h-[360px] overflow-hidden rounded-b-[56px] sm:h-[460px] lg:h-[858px] lg:rounded-b-[118px]"
      >
        <Image
          src="/images/artikel/artikel.svg"
          alt="Gedung Politeknik Negeri Batam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

     
    </section>
  );
}
