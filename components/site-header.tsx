"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Wordmark } from "@/components/wordmark";
import { company, nav } from "@/lib/company";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="bg-ink text-[13px] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="inline-block h-2 w-2 bg-brand" aria-hidden="true" />
            <span className="font-semibold">Insurance brokers</span>
            <span className="text-white/40" aria-hidden="true">
              ·
            </span>
            <span>Ikeja, Lagos and Garki, Abuja</span>
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {company.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="font-medium hover:underline"
              >
                {phone.display}
              </a>
            ))}
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5"
          aria-label={`${company.name} home`}
        >
          <Logo className="h-11 w-11 shrink-0 text-brand" />
          <Wordmark compact className="min-w-0" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-1 text-sm font-medium ${
                  active
                    ? "border-brand text-brand"
                    : "border-transparent text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phones[0].href}
            className="hidden bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-deep sm:inline-flex"
          >
            Call us
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="site-menu" className="border-t border-line bg-card lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8" aria-label="Mobile">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-line py-3 text-lg ${
                    active ? "text-brand" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={company.phones[0].href}
              className="py-3 text-lg font-medium text-brand"
            >
              Call {company.phones[0].display}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
    </>
  );
}
