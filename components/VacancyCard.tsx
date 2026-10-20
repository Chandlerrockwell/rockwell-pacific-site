import type { ListingSummary } from "@/lib/appfolio";

export function VacancyCard({ listing: l }: { listing: ListingSummary }) {
  return (
    <a
      href={`/vacancies/${l.slug}`}
      className="group block bg-bone border border-ink/10 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] overflow-hidden bg-ink/5">
        {l.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={l.image}
            alt={`${l.bedBathLabel} apartment for rent at ${l.address}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : null}
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <span className="font-serif text-[28px] text-ink leading-none">
            {l.rentLabel}
            <span className="text-[14px] text-ink/50 font-sans"> /mo</span>
          </span>
          <span className="text-[12px] tracking-[0.15em] uppercase text-pacific">
            {l.available === "Now" ? "Available now" : `Available ${l.available}`}
          </span>
        </div>
        <h3 className="text-ink text-[16px] leading-snug mb-2 group-hover:text-pacific transition-colors">
          {l.title}
        </h3>
        <p className="text-ink/60 text-[14px]">
          {l.bedBathLabel}
          {l.sqft ? ` · ${l.sqft.toLocaleString()} sq ft` : ""} · {l.address}
        </p>
      </div>
    </a>
  );
}
