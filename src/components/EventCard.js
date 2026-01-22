import PosterFrame from "./PosterFrame";

const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(dateString));

export default function EventCard({ event, onTicketClick }) {
  return (
    <div
      className="grid gap-6 rounded-xl border border-border bg-surface p-6 md:grid-cols-[140px_1fr]"
      style={{ boxShadow: `0 0 30px ${event.accentColor}30` }}
    >
      <PosterFrame
        src={event.posterImage}
        alt={`${event.title} poster`}
        accentColor={event.accentColor}
      />
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Next Event</p>
          <h2 className="font-heading text-2xl md:text-3xl">{event.title}</h2>
          <p className="mt-2 text-sm text-muted">{formatDate(event.date)}</p>
          <p className="text-sm text-muted">
            {event.startTime}–{event.endTime} · {event.venueName}
          </p>
        </div>
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
        <button
          onClick={onTicketClick}
          className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-background shadow-glow transition hover:opacity-90"
        >
          Buy tickets
        </button>
        <p className="text-xs text-muted">Tickets are purchased via Ticketmaster.</p>
      </div>
    </div>
  );
}
