import type { Metadata } from "next";
import { Barlow_Condensed, Newsreader, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const description = `${company.name} (${company.legalName}) is an insurance brokerage. The firm arranges personal and commercial cover for clients in Ikeja, Lagos and Garki, Abuja.`;

export const metadata: Metadata = {
  title: {
    default: company.name,
    template: `%s · ${company.name}`,
  },
  description,
  openGraph: {
    title: company.name,
    description,
    locale: "en_NG",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: company.name,
  alternateName: company.legalName,
  email: company.email,
  telephone: company.phones.map((phone) => phone.href.replace("tel:", "")),
  description: company.blurb,
  employee: {
    "@type": "Person",
    name: company.leader.name,
    jobTitle: company.leader.title,
  },
  location: company.offices.map((office) => ({
    "@type": "Place",
    name: office.label,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.street,
      addressLocality: office.locality,
      addressRegion: office.region,
      addressCountry: "NG",
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${newsreader.variable} ${barlow.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
