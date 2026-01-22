"use client";

import { useMemo, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PosterFrame from "../../components/PosterFrame";
import Toast from "../../components/Toast";
import { events } from "../../data/events";

const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(dateString));

export default function EventsPage() {
  const upcomingEvents = useMemo(
    () => events.filter((event) => event.status === "upcoming"),
    []
  );
  const pastEvents = useMemo(() => events.filter((event) => event.status === "past"), []);
  const nextEvent = upcomingEvents[0];
  const [toastVisible, setToastVisible] = useState(false);

  const handleTicketClick = (ticketUrl) => {
    if (!ticketUrl) return;
    setToastVisible(true);
    window.setTimeout(() => {
      window.open(ticketUrl, "_blank", "noopener,noreferrer");
      setToastVisible(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-text">
      <Header
        hasTickets={Boolean(nextEvent)}
        onTicketsClick={() => handleTicketClick(nextEvent?.ticketUrl)}
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-10 md:px-8">
        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Upcoming</p>
            <h1 className="mt-2 font-heading text-4xl">Next events</h1>
          </div>
          {upcomingEvents.length === 0 ? (
            <div className="rounded-xl border border-border bg-surface p-6 text-sm text-muted">
              Next drop announced soon. Join the waitlist on the homepage.
            </div>
          ) : (
            <div className="grid gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.slug}
                  className="grid gap-6 rounded-xl border border-border bg-surface p-6 md:grid-cols-[180px_1fr]"
                >
                  <PosterFrame
                    src={event.posterImage}
                    alt={`${event.title} poster`}
                    accentColor={event.accentColor}
                  />
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="font-heading text-2xl">{event.title}</h2>
                      <p className="text-sm text-muted">
                        {formatDate(event.date)} · {event.startTime}–{event.endTime}
                      </p>
                      <p className="text-sm text-muted">
                        {event.venueName} · {event.address}
                      </p>
                      <p className="text-sm text-muted">Age limit: {event.ageLimit}</p>
                    </div>
                    <button
                      onClick={() => handleTicketClick(event.ticketUrl)}
                      className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-background shadow-glow transition hover:opacity-90"
                    >
                      Buy tickets
                    </button>
                    <p className="text-xs text-muted">Tickets are purchased via Ticketmaster.</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Archive</p>
            <h2 className="mt-2 font-heading text-3xl">Past nights</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pastEvents.map((event) => (
              <div key={event.slug} className="rounded-xl border border-border bg-surface p-6">
                <PosterFrame
                  src={event.posterImage}
                  alt={`${event.title} poster`}
                  accentColor={event.accentColor}
                />
                <div className="mt-4">
                  <h3 className="font-heading text-xl">{event.title}</h3>
                  <p className="text-sm text-muted">
                    {formatDate(event.date)} · {event.startTime}–{event.endTime}
                  </p>
                  <p className="mt-2 text-sm text-muted">{event.recap}</p>
                  {event.igPostUrl ? (
                    <a
                      href={event.igPostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex w-fit items-center justify-center rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-text hover:border-text"
                    >
                      Instagram recap
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Toast message="Redirecting to Ticketmaster…" isVisible={toastVisible} />
    </div>
  );
}
