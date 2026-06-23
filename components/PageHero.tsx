import { Nav } from "@/components/Nav";

type PageHeroProps = {
  eyebrow: string;
  titleTop: string;
  titleItalic?: string;
  subtitle?: string;
};

export function PageHero({ eyebrow, titleTop, titleItalic, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-ink text-bone overflow-hidden">
      <Nav />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-24 md:pt-48 md:pb-28">
        <div className="text-[11px] tracking-[0.4em] text-bone/70 mb-6 flex items-center gap-4">
          <span className="w-12 h-px bg-bone/40" />
          {eyebrow}
        </div>
        <h1 className="font-serif text-bone text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08] font-light max-w-3xl">
          {titleTop}
          {titleItalic ? (
            <>
              {" "}
              <span className="italic font-normal">{titleItalic}</span>
            </>
          ) : null}
        </h1>
        {subtitle ? (
          <p className="mt-7 text-bone/80 text-lg leading-relaxed max-w-xl font-light">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
