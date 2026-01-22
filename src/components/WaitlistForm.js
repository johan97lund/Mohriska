"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mohriska_waitlist";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSubmitted(true);
        }
      } catch (error) {
        console.warn("Unable to read waitlist data", error);
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    const current = stored ? JSON.parse(stored) : [];
    const updated = Array.isArray(current) ? [...current, email] : [email];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Waitlist</p>
      <h3 className="mt-2 font-heading text-2xl">Get notified for the next drop.</h3>
      <p className="mt-2 text-sm text-muted">
        Leave your email. We only send announcements for new MOHRISKA nights.
      </p>
      {submitted ? (
        <div className="mt-6 rounded-xl border border-border bg-background/40 p-4 text-sm text-text">
          You&apos;re on the list. We&apos;ll reach out when the next night is announced.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="flex-1 rounded-full border border-border bg-background/40 px-4 py-3 text-sm text-text placeholder:text-muted"
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-background shadow-glow transition hover:opacity-90"
          >
            Join waitlist
          </button>
        </form>
      )}
      <p className="mt-3 text-xs text-muted">TODO: Replace localStorage with a real provider.</p>
    </div>
  );
}
