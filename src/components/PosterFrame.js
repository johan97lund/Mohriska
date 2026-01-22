import Image from "next/image";

export default function PosterFrame({ src, alt, accentColor = "#F49E0F", priority }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-card"
      style={{ boxShadow: `0 0 30px ${accentColor}40` }}
    >
      <Image
        src={src}
        alt={alt}
        width={900}
        height={1200}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
