export default function Eyebrow({ children, lines = false }: { children: React.ReactNode; lines?: boolean }) {
  const rule = <span className="h-px w-9 bg-current opacity-50" aria-hidden />;
  return (
    <small className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-[#6b6b6b]">
      {lines && rule}{children}{lines && rule}
    </small>
  );
}
