import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-sm font-medium text-brand">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
        This page is not on the site.
      </h1>
      <p className="mt-4 max-w-lg leading-relaxed text-muted">
        The address does not match Home, About, Services, or Contact.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep"
      >
        Back to the home page
      </Link>
    </div>
  );
}
