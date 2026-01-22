const chips = [
  { label: "20+", description: "Age limit" },
  { label: "22–02", description: "Doors 22:00, close 02:00" },
  { label: "Åsgatan 25", description: "Quality Hotel Grand" },
  { label: "Falun", description: "Central Falun" }
];

export default function InfoChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((chip) => (
        <div
          key={chip.label}
          className="rounded-full border border-border bg-surface px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted"
        >
          {chip.label}
        </div>
      ))}
    </div>
  );
}
