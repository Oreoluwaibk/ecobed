import type { Metadata } from "next";
import Link from "next/link";
import { OfficeList } from "@/components/offices";
import {
  brokerDuties,
  company,
  homeServiceSlugs,
  placementSteps,
  practiceLines,
  services,
} from "@/lib/company";

export const metadata: Metadata = {
  description: `${company.name} is an insurance brokerage led by ${company.leader.name}, ${company.leader.title}. The firm arranges personal and commercial cover from Ikeja and Abuja.`,
};

export default function Home() {
  const highlights = homeServiceSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [service] : [];
  });

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20">
        <div className="min-w-0 border-l-[3px] border-brand pl-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
            {company.name}
          </p>
          <h1 className="mt-4 font-serif text-[2.65rem] leading-[1.05] text-balance text-ink sm:text-6xl lg:text-[4rem]">
            Insurance broking for the client.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            {company.legalName} is an insurance brokerage. People and
            organisations instruct the firm. We arrange the cover. An insurance
            company issues the policy and carries the risk.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink">
            The head office is in Ikeja, Lagos. The second office is in Garki,
            Abuja. {company.leader.name} is {company.leader.title}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep"
            >
              Instruct the brokerage
            </Link>
            <Link
              href="/services"
              className="border border-ink/20 bg-card px-5 py-3 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
            >
              Classes of business
            </Link>
          </div>
        </div>

        <aside className="min-w-0 border border-line bg-card">
          <div className="border-b border-line bg-ink px-6 py-5 text-white">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <span className="inline-block h-2 w-2 bg-brand" aria-hidden="true" />
              The book of business
            </p>
            <p className="mt-2 font-serif text-2xl leading-tight">
              Personal lines and commercial lines
            </p>
          </div>
          <div className="grid sm:grid-cols-2">
            {practiceLines.map((line) => (
              <div
                key={line.title}
                className="border-b border-line p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <h2 className="text-sm font-semibold text-brand">{line.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{line.summary}</p>
                <ul className="mt-4 space-y-2">
                  {line.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-ink underline decoration-brand/40 underline-offset-4 hover:text-brand hover:decoration-brand"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="border-t border-line px-6 py-4 text-sm text-muted">
            One firm. The same phones and the same email at both offices.
          </p>
        </aside>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="border-b border-white/15 px-5 py-12 sm:px-8 md:border-b-0 md:border-r md:py-16">
            <p className="border-l-2 border-brand pl-3 text-sm font-semibold">
              The brokerage
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Acts for the client
            </h2>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>Takes the instruction from a person or an organisation</li>
              <li>Explains the cover before it is placed</li>
              <li>Arranges the policy with an insurer</li>
              <li>Follows a claim with the client</li>
            </ul>
          </div>
          <div className="px-5 py-12 sm:px-8 md:py-16">
            <p className="border-l-2 border-white/30 pl-3 text-sm font-semibold">
              The insurer
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Carries the risk
            </h2>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>Underwrites the proposal</li>
              <li>Issues the policy</li>
              <li>Sets the premium and the terms</li>
              <li>Pays valid claims under that contract</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
            What the firm does
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
            The work of an insurance broker
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {brokerDuties.map((item, index) => (
              <article key={item.title} className="border-t-2 border-brand pt-4">
                <p className="font-serif text-2xl text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
              Classes of business
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Cover the brokerage arranges
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-ink underline decoration-brand underline-offset-4 hover:text-brand"
          >
            Full list of classes
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
          Personal lines for households. Commercial lines for businesses. If
          the risk is not listed, describe it to the office and the brokerage
          will say whether an insurer can write it.
        </p>
        <ol className="mt-8 border-t border-line">
          {highlights.map((service, index) => (
            <li key={service.slug} className="border-b border-line">
              <Link
                href={`/services#${service.slug}`}
                className="group grid gap-1 py-4 sm:grid-cols-[3.5rem_14rem_1fr] sm:items-baseline sm:gap-4"
              >
                <span className="font-serif text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-ink group-hover:text-brand">
                  {service.title}
                </span>
                <span className="text-muted sm:text-right">{service.summary}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            How the brokerage handles an instruction
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {placementSteps.map((step, index) => (
              <li key={step.title}>
                <p className="font-serif text-3xl text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-semibold text-brand">{company.leader.title}</p>
              <h2 className="mt-2 font-serif text-4xl leading-tight text-ink">
                {company.leader.name}
              </h2>
            </div>
            <p className="text-pretty leading-relaxed text-muted">
              The brokerage is led from the head office in Ikeja, with the same
              work taken in Abuja. Call either line for a new instruction or a
              claim, and have the policy number ready if a policy is already in
              force.
            </p>
          </div>
          <div className="mt-12">
            <OfficeList />
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep"
          >
            Contact the brokerage
          </Link>
        </div>
      </section>
    </>
  );
}
