"use client";

export const inputClass =
  "w-full border border-nmf-steel-light bg-nmf-steel px-4 py-3 text-sm text-nmf-white placeholder:text-nmf-mute focus:border-nmf-red focus:outline-none";

export function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-[0.1em] text-nmf-mute">
        {label} {required && <span className="text-nmf-red">*</span>}
      </span>
      {hint && <span className="ml-2 text-[11px] normal-case text-nmf-mute/70">{hint}</span>}
      <div className="mt-2">{children}</div>
    </label>
  );
}

export function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3.5 py-2 font-mono text-xs uppercase tracking-[0.05em] transition-colors cursor-pointer ${
        active
          ? "border-nmf-red bg-nmf-red text-nmf-white"
          : "border-nmf-steel-light text-nmf-off hover:border-nmf-red"
      }`}
    >
      {label}
    </button>
  );
}

export function SectionHeading({ index, title }: { index: number; title: string }) {
  return (
    <div className="tag-rule mb-6 mt-14 first:mt-0">
      <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
        {String(index).padStart(2, "0")} - {title}
      </span>
    </div>
  );
}
