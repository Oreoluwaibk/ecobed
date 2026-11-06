"use client";

import { FormEvent, useState } from "react";
import { company, services } from "@/lib/company";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const cover = String(data.get("cover") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Cover: ${cover}`,
      "",
      message,
    ].join("\n");

    const href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Instruction to the brokerage from ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setOpened(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 border border-line bg-card p-5 sm:p-7"
    >
      <div>
        <h2 className="font-serif text-3xl text-ink">Instruct the brokerage</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          This opens an email to the firm at {company.email}. Use it for a new
          cover or to report a claim. If an email app does not open, write to
          that address or call either office.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Your name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full border border-line bg-white px-3 py-3 text-base font-normal text-ink"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone number
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-2 w-full border border-line bg-white px-3 py-3 text-base font-normal text-ink"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border border-line bg-white px-3 py-3 text-base font-normal text-ink"
        />
      </label>

      <label className="block text-sm font-medium text-ink">
        Cover you are asking about
        <select
          name="cover"
          defaultValue="Not sure yet"
          className="mt-2 w-full border border-line bg-white px-3 py-3 text-base font-normal text-ink"
        >
          <option>Not sure yet</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-ink">
        What should we know?
        <textarea
          name="message"
          required
          rows={6}
          className="mt-2 w-full border border-line bg-white px-3 py-3 text-base font-normal text-ink"
        />
      </label>

      <button
        type="submit"
        className="bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep"
      >
        Open an email
      </button>

      {opened ? (
        <p className="text-sm leading-relaxed text-ink" role="status">
          Your email app should open with this instruction addressed to the
          brokerage at {company.email}. If nothing opened, copy the details
          into an email to that address, or call {company.phones[0].display}.
        </p>
      ) : null}
    </form>
  );
}
