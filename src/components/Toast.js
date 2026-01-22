export default function Toast({ message, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-full border border-border bg-surface px-4 py-3 text-xs uppercase tracking-[0.3em] text-text shadow-card">
      {message}
    </div>
  );
}
