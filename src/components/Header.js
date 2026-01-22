import Link from "next/link";

export default function Header({ hasTickets, onTicketsClick }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="font-heading text-lg tracking-[0.3em]">
          MOHRISKA
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] md:flex">
          <Link href="/events" className="text-muted hover:text-text transition">
            Events
          </Link>
          <Link href="/#info" className="text-muted hover:text-text transition">
            Info
          </Link>
          <a
            href="https://www.instagram.com/mohriska"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition"
          >
            Instagram
          </a>
        </nav>
        {hasTickets ? (
          <button
            onClick={onTicketsClick}
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-background shadow-glow transition hover:opacity-90"
          >
            Tickets
          </button>
        ) : (
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Next drop soon</span>
        )}
      </div>
    </header>
  );
}
