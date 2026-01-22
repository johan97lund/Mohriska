import Image from "next/image";

export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen || !content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Past night details"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-xl border border-border bg-surface p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Past night</p>
            <h3 className="font-heading text-2xl">{content.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-border px-3 py-2 text-xs uppercase tracking-[0.3em] text-muted"
          >
            Close
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr]">
          <Image
            src={content.image}
            alt={content.title}
            width={800}
            height={1000}
            className="h-full w-full rounded-xl object-cover"
          />
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted">{content.recap}</p>
            {content.igPostUrl ? (
              <a
                href={content.igPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-text hover:border-text"
              >
                View on Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
