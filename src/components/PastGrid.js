import Image from "next/image";

export default function PastGrid({ items, onSelect }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item)}
          className="group relative overflow-hidden rounded-xl border border-border bg-surface text-left"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={800}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-background/70 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Past night</p>
            <p className="font-heading text-lg">{item.title}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
