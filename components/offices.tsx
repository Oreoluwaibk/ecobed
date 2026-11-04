import { company } from "@/lib/company";

export function OfficeList() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {company.offices.map((office) => (
        <article key={office.label} className="border-t-2 border-brand pt-5">
          <h3 className="text-sm font-medium text-brand">{office.label}:</h3>
          <address className="mt-3 text-lg leading-relaxed not-italic text-ink">
            {office.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={office.map}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-ink underline decoration-brand underline-offset-4 hover:text-brand"
          >
            Open {office.label.toLowerCase()} on the map
          </a>
        </article>
      ))}
    </div>
  );
}
