import Image from "next/image";

export function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 reveal">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Image
            src="/logo/logo-square.png"
            alt="Rockwell Pacific Management"
            width={44}
            height={44}
            className="rounded-sm"
            priority
          />
          <div className="hidden sm:block">
            <div className="font-serif text-[15px] tracking-[0.18em] text-ink leading-none">
              ROCKWELL PACIFIC
            </div>
            <div className="text-[10px] tracking-[0.3em] text-ink/50 mt-1">
              MANAGEMENT
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-ink/75">
          <a href="#services" className="hover:text-pacific transition-colors">Residents</a>
          <a href="#properties" className="hover:text-pacific transition-colors">Properties</a>
          <a href="#vacancies" className="hover:text-pacific transition-colors">Vacancies</a>
          <a href="#contact" className="hover:text-pacific transition-colors">Contact</a>
        </div>

        <a
          href="https://rockwellpmg.appfolio.com/connect"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] tracking-[0.15em] uppercase bg-ink text-bone px-5 py-2.5 hover:bg-pacific transition-colors"
        >
          Pay Rent
        </a>
      </div>
    </nav>
  );
}
