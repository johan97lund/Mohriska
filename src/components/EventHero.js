import PosterFrame from "./PosterFrame";

const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date(dateString));

export default function EventHero({ event, onTicketClick }) {
  if (!event) {
    return (
      <section className="relative overflow-hidden rounded-xl border border-border bg-surface px-6 py-12 md:px-10">
        <div className="pointer-events-none absolute inset-0 text-[clamp(3rem,15vw,10rem)] font-heading uppercase tracking-[0.4em] text-transparent opacity-70 [-webkit-text-stroke:1px_rgba(252,246,234,0.2)]">
          <span className="absolute left-4 top-6">MOHRISKA</span>
        </div>
        <div className="relative z-10 flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Next drop</p>
          <h1 className="font-heading text-3xl md:text-5xl">Next drop announced soon.</h1>
          <p className="max-w-xl text-sm text-muted">
            A pop-up club for electronic music in Falun. Few nights per year, no filler.
          </p>
          <a
            href="#waitlist"
            className="inline-flex w-fit items-center justify-center rounded-full border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-text hover:border-text"
          >
            Get notified
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative grid gap-8 overflow-hidden md:grid-cols-[1.1fr_1fr]">
      <div className="pointer-events-none absolute inset-0 text-[clamp(3rem,15vw,11rem)] font-heading uppercase tracking-[0.4em] text-transparent opacity-70 [-webkit-text-stroke:1px_rgba(252,246,234,0.2)]">
        <span className="absolute left-4 top-6">MOHRISKA</span>
      </div>
      <PosterFrame
        src={event.posterImage}
        alt={`${event.title} poster`}
        accentColor={event.accentColor}
        priority
      />
      <div
        className="relative z-10 flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-6 md:p-10"
        style={{ boxShadow: `0 0 30px ${event.accentColor}40` }}
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Next Event</p>
          <h1 className="font-heading text-3xl md:text-5xl">{event.title}</h1>
          <p className="text-sm text-muted">{formatDate(event.date)}</p>
          <p className="text-sm text-muted">
            {event.startTime}–{event.endTime} · {event.venueName}
          </p>
          <p className="text-sm text-muted">{event.lineup}</p>
          <div className="flex flex-wrap gap-2">
            {[event.ageLimit, `${event.startTime}-${event.endTime}`, event.address, "Falun"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button
            onClick={onTicketClick}
            className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-background shadow-glow transition hover:opacity-90"
          >
            Buy tickets
          </button>
          <p className="text-xs text-muted">Tickets are purchased via Ticketmaster.</p>
        </div>
      </div>
    </section>
  );
}
