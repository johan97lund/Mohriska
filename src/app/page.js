"use client";

import { useMemo, useState } from "react";
import EventHero from "../components/EventHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoChips from "../components/InfoChips";
import Modal from "../components/Modal";
import PastGrid from "../components/PastGrid";
import Toast from "../components/Toast";
import WaitlistForm from "../components/WaitlistForm";
import { events, pastNights } from "../data/events";
import EventCard from "../components/EventCard";

const getNextEvent = (allEvents) => {
  const upcoming = allEvents
    .filter((event) => event.status === "upcoming")
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return upcoming[0];
};

export default function HomePage() {
  const nextEvent = useMemo(() => getNextEvent(events), []);
  const [toastVisible, setToastVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleTicketClick = () => {
    if (!nextEvent?.ticketUrl) return;
    setToastVisible(true);
    window.setTimeout(() => {
      window.open(nextEvent.ticketUrl, "_blank", "noopener,noreferrer");
      setToastVisible(false);
    }, 600);
  };

  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <div className="min-h-screen bg-background text-text">
      <Header hasTickets={Boolean(nextEvent)} onTicketsClick={handleTicketClick} />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-10 md:px-8">
        <EventHero event={nextEvent} onTicketClick={handleTicketClick} />

        <section id="events" className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Concept</p>
            <h2 className="mt-2 font-heading text-3xl">A pop-up club for electronic music.</h2>
            <p className="mt-4 text-sm text-muted">
              Few nights per year. Each drop is a complete world: architectural lighting, intimate
              dance floor, and a focused lineup.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Venue / Info</p>
            <InfoChips />
          </div>
        </section>

        {nextEvent ? (
          <section className="grid gap-6" aria-label="Next event details">
            <EventCard event={nextEvent} onTicketClick={handleTicketClick} />
          </section>
        ) : null}

        <section id="info" className="grid gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Past nights</p>
            <h2 className="mt-2 font-heading text-3xl">Archive highlights</h2>
          </div>
          <PastGrid items={pastNights} onSelect={setModalContent} />
        </section>

        <section id="waitlist" className="grid gap-6">
          <WaitlistForm />
        </section>

        <section className="grid gap-4 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Past events</p>
          <div className="grid gap-6 md:grid-cols-2">
            {pastEvents.map((event) => (
              <div key={event.slug} className="rounded-xl border border-border p-4">
                <p className="font-heading text-xl">{event.title}</p>
                <p className="text-sm text-muted">{event.recap}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Modal
        isOpen={Boolean(modalContent)}
        onClose={() => setModalContent(null)}
        content={modalContent}
      />
      <Toast message="Redirecting to Ticketmaster…" isVisible={toastVisible} />
    </div>
  );
}
