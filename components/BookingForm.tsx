"use client";

import { useState } from "react";
import Button from "./Button";

const FORMSPARK_ENDPOINT = "https://submit-form.com/lMB91bP9I";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const response = await fetch(FORMSPARK_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl2 bg-soft-blue/25 p-7 text-navy">
        <h3 className="text-xl font-semibold">Thank you. Message received.</h3>
        <p className="mt-3 leading-relaxed text-navy/85">
          I will reply the same day, usually within a few hours, to confirm a
          time that works for you. If you do not see anything from me by tomorrow,
          please check your spam folder, or email{" "}
          <a className="underline" href="mailto:hello@hampshireheadspace.com">
            hello@hampshireheadspace.com
          </a>
          .
        </p>
        <p className="mt-4 text-sm text-navy/70">
          Whatever you wrote stays between us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — bots fill this, humans don't see it */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy/80">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="given-name"
          placeholder="First name is fine"
          className="w-full rounded-xl2 border-2 border-soft-blue/60 bg-cream px-4 py-3 text-navy placeholder:text-warm-grey-light focus:border-navy focus:outline-none"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-xl2 border-2 border-soft-blue/60 bg-cream px-4 py-3 text-navy placeholder:text-warm-grey-light focus:border-navy focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy/80">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="If you would prefer a text"
            className="w-full rounded-xl2 border-2 border-soft-blue/60 bg-cream px-4 py-3 text-navy placeholder:text-warm-grey-light focus:border-navy focus:outline-none"
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-navy/80">
          How would you prefer I reply?
        </legend>
        <div className="flex flex-wrap gap-2">
          {(["email", "text", "call"] as const).map((opt) => (
            <label
              key={opt}
              className="cursor-pointer rounded-xl2 border-2 border-soft-blue/60 bg-cream px-4 py-2 text-sm text-navy/85 transition-colors duration-200 ease-out has-[:checked]:border-navy has-[:checked]:bg-navy has-[:checked]:text-cream"
            >
              <input
                type="radio"
                name="contactPref"
                value={opt}
                defaultChecked={opt === "email"}
                className="sr-only"
              />
              {opt === "email" ? "Email" : opt === "text" ? "Text" : "Call"}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="bestTime" className="mb-2 block text-sm font-medium text-navy/80">
          Roughly when suits you? (optional)
        </label>
        <input
          id="bestTime"
          name="bestTime"
          type="text"
          placeholder="e.g. weekday evenings, Tuesday afternoons"
          className="w-full rounded-xl2 border-2 border-soft-blue/60 bg-cream px-4 py-3 text-navy placeholder:text-warm-grey-light focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy/80">
          Anything you want to say (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A sentence is enough, you don’t have to elaborate."
          className="w-full resize-none rounded-xl2 border-2 border-soft-blue/60 bg-cream px-4 py-3 text-navy placeholder:text-warm-grey-light focus:border-navy focus:outline-none"
        />
      </div>

      <p className="text-xs text-warm-grey">
        Whatever you write stays between us, I will only use it to get back to you. Speak soon!
      </p>

      {error && (
        <div role="alert" className="rounded-xl2 border-2 border-red-300 bg-red-50 p-4 text-sm text-red-900">
          Something went wrong sending the message. Please try again, or email{" "}
          <a className="underline" href="mailto:hello@hampshireheadspace.com">
            hello@hampshireheadspace.com
          </a>{" "}
          directly.
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
