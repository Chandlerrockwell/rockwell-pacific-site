import Image from "next/image";

export function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 reveal">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + company name — enlarged and set in light "bone" so it stays
            legible over the dark hero photo (was dark-on-dark and invisible). */}
        <a href="#top" className="flex items-center gap-4 group">
          <Image
            src="/logo/logo-square.png"
            alt="Rockwell Pacific Management"
            width={64}
            height={64}
            className="rounded-sm w-14 h-14 md:w-16 md:h-16"
            priority
          />
          <div className="block">
            <div className="font-serif text-[19px] md:text-[22px] tracking-[0.18em] text-bone leading-none">
              ROCKWELL PACIFIC
            </div>
            <div className="text-[11px] md:text-[12px] tracking-[0.34em] text-bone/75 mt-1.5">
              MANAGEMENT
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-bone/80">
          <a href="#services" className="hover:text-pacific-mist transition-colors">Residents</a>
          <a href="#properties" className="hover:text-pacific-mist transition-colors">Properties</a>
          <a href="#vacancies" className="hover:text-pacific-mist transition-colors">Vacancies</a>
          <a href="#contact" className="hover:text-pacific-mist transition-colors">Contact</a>
        </div>

        {/* Two clear tenant actions, always visible at the top */}
        <div className="flex items-center gap-3">
          <a
            href="https://rockwellpmgllc.appfolio.com/connect"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[12px] tracking-[0.15em] uppercase border border-bone/50 text-bone px-5 py-2.5 hover:bg-bone hover:text-ink transition-colors"
          >
            Maintenance
          </a>
          <a
            href="https://rockwellpmgllc.appfolio.com/connect"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[0.15em] uppercase bg-bone text-ink px-5 py-2.5 hover:bg-pacific hover:text-bone transition-colors"
          >
            Pay Rent
          </a>
        </div>
      </div>
    </nav>
  );
}
