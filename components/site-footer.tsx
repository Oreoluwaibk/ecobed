import Link from "next/link";
import { Logo } from "@/components/logo";
import { Wordmark } from "@/components/wordmark";
import { company, nav } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-[3px] border-brand bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <Logo className="h-11 w-11 text-brand" />
            <Wordmark tone="light" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {company.legalName}. {company.blurb}
          </p>
        </div>

        {company.offices.map((office) => (
          <div key={office.label}>
            <h2 className="text-sm font-medium text-brand">{office.label}:</h2>
            <address className="mt-3 text-sm leading-relaxed not-italic text-white/85">
              {office.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        ))}

        <div>
          <h2 className="text-sm font-medium text-brand">Speak to us:</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {company.phones.map((phone) => (
              <li key={phone.href}>
                <a className="hover:underline" href={phone.href}>
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a
                className="break-all hover:underline"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </li>
          </ul>
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-white/60 sm:px-8">
          © 2026 {company.name} ({company.legalName}). Insurance brokers. An
          insurance company issues the policy.
        </p>
      </div>
    </footer>
  );
}
