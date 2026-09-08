"use client";

import Image from "next/image";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { site } from "@/content/site";
import {
  initialContactState,
  submitContact,
} from "@/app/actions/contact";
import { Field, FieldRow } from "@/components/ui/Field";
import { ChipToggle } from "@/components/ui/Chip";
import { PhoneIcon, PinIcon, SpinnerIcon } from "@/components/ui/Icons";
import { StaticMap } from "@/components/ui/StaticMap";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[var(--radius-btn)] border border-transparent bg-clay px-[26px] text-[15px] font-semibold tracking-[0.02em] text-white transition-[background-color,transform] duration-150 hover:bg-clay-dark active:translate-y-px disabled:translate-y-0 disabled:cursor-not-allowed disabled:border-line disabled:bg-[#EDE7DE] disabled:text-[#A79E92]"
    >
      {pending ? <SpinnerIcon size={16} /> : null}
      {pending ? site.contact.pending : site.contact.cta}
    </button>
  );
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContact, initialContactState);
  const [intent, setIntent] = useState<string>(site.contact.intents[0].value);
  const { contact, visit } = site;

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-14 md:py-[112px]">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[6fr_5fr] md:gap-20">
          {/* ── form ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 md:gap-[26px]">
            <div className="flex flex-col gap-3.5">
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2
                id="contact-title"
                className="text-[clamp(2rem,3.2vw,2.875rem)] leading-[1.12] tracking-[-0.02em]"
              >
                {contact.title}
              </h2>
              <p className="measure text-[16px] leading-[1.7]">{contact.body}</p>
            </div>

            {state.status === "success" ? (
              <div
                role="status"
                tabIndex={-1}
                className="flex flex-col gap-3 rounded-[3px] border border-line bg-sand p-6"
              >
                <h3 className="text-[24px] leading-[1.25]">{contact.successTitle}</h3>
                <p className="text-[15px] leading-[1.7]">{contact.successBody}</p>
                <a
                  href={site.phone.href}
                  data-analytics="call_click"
                  data-location="contact_success"
                  className="inline-flex items-center gap-2 text-[16px] font-semibold text-clay-dark hover:text-clay"
                >
                  <PhoneIcon size={16} />
                  {site.phone.display}
                </a>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-5">
                {state.status === "error" && state.message ? (
                  <p
                    role="alert"
                    className="rounded-[3px] border border-danger/40 bg-danger/5 px-4 py-3 text-[14px] text-danger"
                  >
                    {state.message}
                  </p>
                ) : null}

                <div className="flex flex-col gap-2">
                  <span className="field-label" id="intent-label">
                    I&rsquo;m…
                  </span>
                  <div className="flex flex-wrap gap-2.5" role="group" aria-labelledby="intent-label">
                    {contact.intents.map((o) => (
                      <ChipToggle
                        key={o.value}
                        selected={intent === o.value}
                        onClick={() => setIntent(o.value)}
                      >
                        {o.label}
                      </ChipToggle>
                    ))}
                  </div>
                  <input type="hidden" name="intent" value={intent} />
                </div>

                <FieldRow>
                  <Field
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    error={state.errors?.name}
                    defaultValue={state.values?.name}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    error={state.errors?.email}
                    defaultValue={state.values?.email}
                  />
                </FieldRow>

                <Field
                  label="Message"
                  name="message"
                  multiline
                  placeholder="Address, timing, anything you'd like Marci to know…"
                  error={state.errors?.message}
                  defaultValue={state.values?.message}
                />

                {/* honeypot — visually and programmatically hidden */}
                <div aria-hidden className="absolute h-px w-px overflow-hidden opacity-0">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <SubmitButton />
                  <p className="max-w-[280px] text-[13px] leading-[1.5] text-ink-3">
                    {contact.legal}
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* ── office card + map ───────────────────────────────── */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5 rounded-[3px] bg-sand p-6 md:gap-[22px] md:p-[34px]">
              <div className="flex flex-col gap-1.5">
                <p className="field-label">{visit.label}</p>
                <p className="font-[family-name:var(--font-display)] text-[20px] leading-[1.3] text-ink md:text-[24px]">
                  Marci Metzger
                  <br />
                  The Ridge Realty Group
                </p>
              </div>

              <div aria-hidden className="h-px bg-line" />

              <div className="flex items-start gap-3.5">
                <PinIcon size={18} className="mt-0.5 shrink-0 text-clay" />
                <address className="text-[15px] not-italic leading-[1.6]">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.stateLong} {site.address.zip},{" "}
                  {site.address.country}
                </address>
              </div>

              <div className="flex items-center gap-3.5">
                <PhoneIcon size={18} className="shrink-0 text-clay" />
                <a
                  href={site.phone.href}
                  data-analytics="call_click"
                  data-location="contact"
                  className="text-[17px] font-semibold text-clay-dark hover:text-clay"
                >
                  {site.phone.display}
                </a>
              </div>

              <div aria-hidden className="h-px bg-line" />

              <div className="flex flex-col gap-2">
                <p className="field-label">{visit.hoursLabel}</p>
                <p className="flex justify-between text-[15px]">
                  <span>{site.hours.label}</span>
                  <span className="font-semibold text-ink">{site.hours.display}</span>
                </p>
                <p className="text-[14px] leading-[1.55] text-ink-3">{site.hours.note}</p>
              </div>
            </div>

            <StaticMap />
          </div>
        </div>
      </div>
    </section>
  );
}

export function OfficeBadge() {
  return (
    <Image
      src="/images/badge-ridge-realty.png"
      alt=""
      width={600}
      height={600}
      className="h-16 w-16"
    />
  );
}
