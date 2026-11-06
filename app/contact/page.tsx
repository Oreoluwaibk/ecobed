import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Instruct ${company.name}, an insurance brokerage, by phone, email, or at the offices in Ikeja and Garki.`,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro kicker="Contact the firm" title="Instruct the brokerage.">
        <p>
          Call either office, write to the firm, or visit Ikeja or Garki. Use
          the same lines for a new cover and for a claim. Say which office is
          closer if you want to come in.
        </p>
      </PageIntro>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:py-16">
        <div className="order-2 lg:order-1">
          <ContactForm />
        </div>

        <aside className="order-1 space-y-10 lg:order-2">
          <div>
            <h2 className="text-sm font-medium text-brand">Phone:</h2>
            <ul className="mt-3 space-y-2">
              {company.phones.map((phone) => (
                <li key={phone.href} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <a
                    href={phone.href}
                    className="whitespace-nowrap font-serif text-2xl text-ink hover:text-brand"
                  >
                    {phone.display}
                  </a>
                  <a
                    href={phone.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand underline decoration-brand/40 underline-offset-4"
                  >
                    WhatsApp
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium text-brand">E-mail:</h2>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 block break-all text-lg text-ink hover:text-brand"
            >
              {company.email}
            </a>
          </div>

          <div className="grid gap-8">
            {company.offices.map((office) => (
              <article key={office.label} className="border-t-2 border-brand pt-4">
                <h2 className="text-sm font-medium text-brand">{office.label}:</h2>
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
                  className="mt-3 inline-block text-sm font-medium text-ink underline decoration-brand underline-offset-4 hover:text-brand"
                >
                  Open the map
                </a>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
