export function Tag({ children }) {
  return (
    <span className="rounded-full border border-base-200 bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-base-600">
      {children}
    </span>
  );
}