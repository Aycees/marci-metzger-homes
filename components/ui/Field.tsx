import type { ReactNode } from "react";

const CONTROL =
  "w-full rounded-[var(--radius-field)] border bg-white px-3.5 text-[15px] text-ink " +
  "placeholder:text-ink-3 transition-[border-color,box-shadow] duration-150 " +
  "focus:border-clay focus:outline-none focus:ring-[3px] focus:ring-clay/15";

export function Field({
  label,
  name,
  type = "text",
  required = false,
  multiline = false,
  placeholder,
  error,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="field-label">
        {label}
        {required ? <span className="normal-case tracking-normal"> · required</span> : null}
      </label>

      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${CONTROL} min-h-[118px] resize-y py-3.5 leading-[1.6] ${
            error ? "border-danger" : "border-line"
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${CONTROL} h-[52px] ${error ? "border-danger" : "border-line"}`}
        />
      )}

      {error ? (
        <p id={errorId} className="text-[13px] leading-snug text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SelectField({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: readonly { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          defaultValue={defaultValue}
          className={`${CONTROL} h-[52px] appearance-none border-line pr-10`}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div>;
}
