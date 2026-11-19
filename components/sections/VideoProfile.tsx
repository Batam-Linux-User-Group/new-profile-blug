
"use client";

import { useEffect, useRef, useState } from "react";

const shown = "opacity-100 translate-x-0 translate-y-0";
const anim = "transition-all duration-[900ms] ease-out motion-reduce:transition-none";

const hiddenYT = "opacity-0 translate-y-6 lg:-translate-x-[387px] lg:-translate-y-[6px]";
const hiddenBox = "opacity-0 translate-y-6 lg:translate-x-[581px] lg:translate-y-[118px]";
const hiddenTitle = "opacity-0 translate-y-6 lg:-translate-x-[24px] lg:-translate-y-[77px]";
const hiddenDesc = "opacity-0 translate-y-6 lg:translate-x-[587px] lg:translate-y-0";

export default function VideoProfile() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative px-6 pb-24 lg:px-0 lg:pb-[224px]">
      <div className="mx-auto grid max-w-[969px] items-start gap-8 lg:grid-cols-[371px_1fr] lg:gap-[28px]">

        {/* Video */}
        <div
          className={`border-grad-yellow group relative h-[196px] overflow-hidden rounded-[11px] bg-black lg:mt-[6px] ${anim} ${visible ? shown : hiddenYT}`}
        >
          {!playing ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Putar video profil"
              className="absolute inset-0 flex h-full w-full items-center justify-center"
            >
              {/* Thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.youtube.com/vi/HqK7idXPL90/hqdefault.jpg"
                alt="Thumbnail video profil BLUG"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />

              {/* Overlay */}
              <span className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/30" />

              {/* Play Button */}
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#F5C542] group-hover:bg-[#F5C542]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-7 w-7 text-white transition-colors duration-300 group-hover:text-black"
                >
                  <path d="M6.75 4.5v15l12-7.5-12-7.5Z" />
                </svg>
              </span>
            </button>
          ) : (
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/HqK7idXPL90?autoplay=1&rel=0"
              title="Video Profile BLUG"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>

        {/* Kanan: Judul + Deskripsi */}
        <div>
          <div className="relative h-[77px] w-full max-w-[488px]">
            {/* Background Box */}
            <div
              className={`border-grad-red absolute inset-0 rounded-[11.5px] backdrop-blur-[15px] shadow-[0_2px_12px_-1px_rgba(0,0,0,0.25)] ${anim} ${visible ? shown : hiddenBox}`}
            />

            {/* Title */}
            <h2
              className={`absolute inset-0 flex items-center justify-center text-[clamp(1.75rem,8vw,59px)] font-bold leading-none text-[#fff8d6] ${anim} ${visible ? shown : hiddenTitle}`}
            >
              VIDEO PROFILE
            </h2>
          </div>

          {/* Description */}
          <p
            className={`mt-[10px] text-base font-semibold text-white lg:text-[20px] ${anim} ${visible ? shown : hiddenDesc}`}
          >
            Kenali lebih dekat perjalanan dan semangat kami dalam membangun
            ekosistem digital yang terbuka. Melalui video profil ini, temukan
            bagaimana kami berkolaborasi, berbagi wawasan, dan terus berinovasi
            bersama.
          </p>
        </div>
      </div>
    </section>
  );
}
