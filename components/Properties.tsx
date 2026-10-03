"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { properties } from "./properties";

type Viewer = { property: number; photo: number } | null;

export function Properties() {
  const [viewer, setViewer] = useState<Viewer>(null);
  const touchX = useRef<number | null>(null);

  const open = (property: number, src: string) => {
    const photo = Math.max(0, properties[property].gallery.findIndex((g) => g.src === src));
    setViewer({ property, photo });
  };
  const close = () => setViewer(null);
  const step = useCallback((d: number) => {
    setViewer((v) => {
      if (!v) return v;
      const n = properties[v.property].gallery.length;
      return { ...v, photo: (v.photo + d + n) % n };
    });
  }, []);

  useEffect(() => {
    if (!viewer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewer(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [viewer, step]);

  const active = viewer ? properties[viewer.property] : null;
  const current = active && viewer ? active.gallery[viewer.photo] : null;

  return (
    <section id="properties" className="relative bg-ink text-bone py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 md:mb-28 max-w-2xl">
          <div className="text-[11px] tracking-[0.4em] text-bone/60 mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-bone/40" />
            THE PORTFOLIO
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] font-light">
            Properties under
            <br />
            <span className="italic text-pacific-mist">our care.</span>
          </h2>
          <p className="mt-8 text-bone/65 leading-relaxed max-w-lg">
            Each building in our portfolio reflects our standard for resident
            experience — character preserved where it matters, systems
            modernized where it counts.
          </p>
        </div>
      </div>

      <div className="space-y-32 md:space-y-44">
        {properties.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={p.slug}
              className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                <button
                  type="button"
                  onClick={() => open(i, p.hero)}
                  className="group relative block w-full aspect-[4/3] overflow-hidden cursor-zoom-in"
                  aria-label={`View photos of ${p.name}`}
                >
                  <Image
                    src={p.hero}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <span className="absolute bottom-4 left-4 bg-ink/70 text-bone text-[11px] tracking-[0.2em] uppercase px-3 py-2 backdrop-blur-sm">
                    View all {p.gallery.length} photos
                  </span>
                </button>
              </div>

              <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                <div className="text-[11px] tracking-[0.3em] text-pacific-mist mb-4">
                  {String(i + 1).padStart(2, "0")} / {String(properties.length).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-3">{p.name}</h3>
                <div className="text-bone/55 text-sm tracking-wide mb-6">
                  {p.neighborhood} · {p.style} · {p.units}
                </div>
                <p className="text-bone/75 leading-relaxed mb-8 text-[15px]">{p.blurb}</p>

                {/* Mini gallery */}
                <div className="grid grid-cols-3 gap-2">
                  {p.gallery.slice(1, 4).map((img) => (
                    <button
                      type="button"
                      key={img.src}
                      onClick={() => open(i, img.src)}
                      className="group relative aspect-square overflow-hidden cursor-zoom-in"
                      aria-label={`Enlarge photo: ${img.alt}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 1024px) 33vw, 15vw"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {active && current && viewer && (
        <div
          className="fixed inset-0 z-[1000] bg-ink/95 flex items-center justify-center px-4 py-16"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} photos`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          }}
        >
          <div className="relative w-full h-full max-w-6xl pointer-events-none">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 w-11 h-11 rounded-full border border-bone/25 text-bone text-2xl hover:bg-bone/10"
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-bone/25 text-bone text-2xl hover:bg-bone/10"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-bone/25 text-bone text-2xl hover:bg-bone/10"
            aria-label="Next photo"
          >
            ›
          </button>
          <div className="absolute bottom-5 inset-x-0 text-center text-bone/70 text-[12px] tracking-[0.2em] uppercase">
            {active.name} · {viewer.photo + 1} / {active.gallery.length}
            <span className="block mt-1 normal-case tracking-normal text-bone/50">{current.alt}</span>
          </div>
        </div>
      )}
    </section>
  );
}
