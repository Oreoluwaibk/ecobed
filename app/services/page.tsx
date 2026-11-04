import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { company, serviceGroups, services } from "@/lib/company";

export const metadata: Metadata = {
  title: "Services",
  description: `Personal and commercial classes of business placed by ${company.name}, an insurance brokerage.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro kicker="Classes of business" title="What the brokerage places.">
        <p>
          These are the personal and commercial classes {company.name} arranges
          for clients. The brokerage advises and places the cover. An insurance
          company underwrites it and pays valid claims under the policy. Every
          placement depends on the proposal and on an insurer accepting the
          risk.
        </p>
      </PageIntro>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:py-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-28" aria-label="Covers on this page">
            {serviceGroups.map((group) => (
              <div key={group} className="mb-6">
                <p className="text-sm font-medium text-brand">{group}</p>
                <ul className="mt-2 space-y-1.5">
                  {services
                    .filter((service) => service.group === group)
                    .map((service) => (
                      <li key={service.slug}>
                        <a
                          href={`#${service.slug}`}
                          className="text-sm text-ink hover:text-brand"
                        >
                          {service.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <div>
          {serviceGroups.map((group) => {
            const items = services.filter((service) => service.group === group);
            return (
              <section key={group} className="mb-12 last:mb-0">
                <h2 className="font-serif text-3xl text-ink">{group}</h2>
                <div className="mt-4">
                  {items.map((service) => (
                    <article
                      key={service.slug}
                      id={service.slug}
                      className="scroll-mt-36 border-t border-line py-7"
                    >
                      <div className="grid gap-3 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8">
                        <h3 className="font-serif text-2xl text-ink">
                          {service.title}
                        </h3>
                        <div>
                          <p className="text-pretty leading-relaxed text-ink">
                            {service.body}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-muted">
                            Usually for: {service.forWhom}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          <div className="border-t-2 border-brand pt-8">
            <h2 className="font-serif text-3xl text-ink">Bring the risk to the firm</h2>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
              If your situation is not listed, describe it to the brokerage. The
              firm can only place what an insurer will write, and the policy
              documents are what govern the cover.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep"
            >
              Instruct the brokerage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
