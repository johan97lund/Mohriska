export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-heading text-lg text-text">MOHRISKA</p>
          <p className="mt-2 text-sm text-muted">
            A pop-up club centered around electronic music in Falun.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href="mailto:hello@mohriska.com"
            className="hover:text-text transition"
          >
            hello@mohriska.com
          </a>
          <a
            href="https://www.instagram.com/mohriska"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition"
          >
            Instagram
          </a>
          <p>Tickets are purchased via Ticketmaster.</p>
        </div>
      </div>
    </footer>
  );
}
