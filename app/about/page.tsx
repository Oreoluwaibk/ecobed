import type { Metadata } from "next";
import Link from "next/link";
import { OfficeList } from "@/components/offices";
import { PageIntro } from "@/components/page-intro";
import { Testimonials } from "@/components/testimonials";
import { company, placementSteps, practiceLines } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description: `${company.name} is an insurance brokerage led by ${company.leader.name}, ${company.leader.title}, with offices in Ikeja and Abuja.`,
};

export default function AboutPage() {
  return (
    <>
      <PageIntro kicker="The organisation" title="An insurance broking firm.">
        <p>
          {company.name}, styled {company.legalName}, is an insurance
          brokerage. Clients instruct the firm. Insurers underwrite the
          policies the firm places. The mark on the firm’s papers is{" "}
          {company.mark}.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="font-serif text-3xl text-ink">Who the broker serves</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            The client is the person or organisation that needs the cover. That
            may be a household arranging motor or home insurance, or a business
            arranging property, liability, goods, or a contract. The brokerage
            is instructed by that client, and the advice is given to that
            client.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-ink">What the broker does not do</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            Ecobed does not issue policies and does not carry the insured risk.
            An insurance company does both. The brokerage’s work is to
            understand the risk, place suitable cover, check the documents, and
            assist when a claim is made.
          </p>
          <Link
            href="/services"
            className="mt-5 inline-block text-sm font-semibold text-ink underline decoration-brand underline-offset-4 hover:text-brand"
          >
            See the classes of business
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            The two sides of the practice
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {practiceLines.map((line) => (
              <article key={line.title} className="border-t-2 border-brand pt-5">
                <h3 className="text-xl font-semibold text-ink">{line.title}</h3>
                <p className="mt-2 text-muted">{line.summary}</p>
                <ul className="mt-4 space-y-2">
                  {line.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-medium text-ink underline decoration-brand/40 underline-offset-4 hover:text-brand"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="text-sm font-semibold text-brand">{company.leader.title}</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {company.leader.name}
            </h2>
          </div>
          <div>
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {company.leader.name} leads {company.name}. Instructions and
              claims are taken at the Ikeja head office and at the Abuja
              office, on the company email, and on the firm’s two phone lines.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-brand">Phone</dt>
                <dd className="mt-2 space-y-1">
                  {company.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block whitespace-nowrap font-medium text-ink hover:text-brand"
                    >
                      {phone.display}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-brand">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all font-medium text-ink hover:text-brand"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            From instruction to claim
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2">
            {placementSteps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-5">
                <p className="font-serif text-2xl text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            Where the firm sits
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Visit the head office in Ikeja or the Abuja office in Garki, or
            call ahead. Both offices belong to the same brokerage.
          </p>
          <div className="mt-10">
            <OfficeList />
          </div>
        </div>
      </section>
    </>
  );
}
