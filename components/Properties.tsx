import Image from "next/image";
import { properties } from "./properties";

export function Properties() {
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
              <div
                className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.hero}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>

              <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                <div className="text-[11px] tracking-[0.3em] text-pacific-mist mb-4">
                  {String(i + 1).padStart(2, "0")} / {String(properties.length).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-3">
                  {p.name}
                </h3>
                <div className="text-bone/55 text-sm tracking-wide mb-6">
                  {p.neighborhood} · {p.style} · {p.units}
                </div>
                <p className="text-bone/75 leading-relaxed mb-8 text-[15px]">
                  {p.blurb}
                </p>

                {/* Mini gallery */}
                <div className="grid grid-cols-3 gap-2">
                  {p.gallery.slice(1, 4).map((img) => (
                    <div key={img.src} className="relative aspect-square overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        sizes="(max-width: 1024px) 33vw, 15vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
