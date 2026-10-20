import { displayAddress, displayTitle, unitLabel, type ListingSummary } from "@/lib/appfolio";

export function VacancyCard({ listing: l }: { listing: ListingSummary }) {
  const unit = unitLabel(l);
  return (
    <a
      href={`/vacancies/${l.slug}`}
      className="group block bg-bone border border-ink/10 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
        {l.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={l.image}
            alt={`${unit ? `${unit}, ` : ""}${l.bedBathLabel} apartment for rent at ${displayAddress(l)}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : null}
        {unit ? (
          <span className="absolute top-4 left-4 bg-ink text-bone text-[12px] tracking-[0.2em] uppercase px-3 py-1.5">
            {unit}
          </span>
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
          {unit ? <span className="font-medium">{unit} · </span> : null}
          {displayTitle(l)}
        </h3>
        <p className="text-ink/60 text-[14px]">
          {l.bedBathLabel}
          {l.sqft ? ` · ${l.sqft.toLocaleString()} sq ft` : ""} · {displayAddress(l)}
        </p>
      </div>
    </a>
  );
}
