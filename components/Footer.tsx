import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-bone pt-24 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-20 border-b border-bone/15">
          <div className="md:col-span-5">
            <div className="text-[11px] tracking-[0.4em] text-bone/60 mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-bone/40" />
              GET IN TOUCH
            </div>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-light mb-8">
              We're here to
              <br />
              <span className="italic text-pacific-mist">make it easy.</span>
            </h2>
            <p className="text-bone/65 leading-relaxed max-w-md text-[15px]">
              Whether you're a current resident, a prospective tenant, or a
              property owner exploring management options, we'd be glad to
              hear from you.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[10px] tracking-[0.3em] text-bone/50 mb-4">RESIDENTS</div>
            <ul className="space-y-3 text-bone/85 text-[14px]">
              <li>
                <a
                  href="https://rockwellpmgllc.appfolio.com/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pacific-mist transition-colors"
                >
                  Pay rent
                </a>
              </li>
              <li>
                <a
                  href="https://rockwellpmgllc.appfolio.com/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pacific-mist transition-colors"
                >
                  Maintenance requests
                </a>
              </li>
              <li>
                <a
                  href="https://rockwellpmgllc.appfolio.com/listings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pacific-mist transition-colors"
                >
                  Available units
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] text-bone/50 mb-4">CONTACT</div>
            <ul className="space-y-3 text-bone/85 text-[14px]">
              <li>
                <a
                  href="tel:+13104057632"
                  className="hover:text-pacific-mist transition-colors"
                >
                  (310) 405-7632
                </a>
              </li>
              <li>
                <a
                  href="mailto:Admin@rockwellpmg.com"
                  className="hover:text-pacific-mist transition-colors"
                >
                  Admin@rockwellpmg.com
                </a>
              </li>
              <li className="text-bone/65">Los Angeles, California</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/logo-square.png"
              alt="Rockwell Pacific Management"
              width={36}
              height={36}
              className="invert opacity-90"
            />
            <div>
              <div className="font-serif text-[13px] tracking-[0.18em]">
                ROCKWELL PACIFIC
              </div>
              <div className="text-[9px] tracking-[0.3em] text-bone/50 mt-1">
                MANAGEMENT
              </div>
            </div>
          </div>

          <div className="text-[11px] text-bone/40 tracking-wide">
            © {new Date().getFullYear()} Rockwell Pacific Management. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
