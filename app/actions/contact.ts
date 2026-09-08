"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; message: string; intent: string };
};

export const initialContactState: ContactState = { status: "idle" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const intent = String(formData.get("intent") ?? "selling");
  const honeypot = String(formData.get("company") ?? "");

  const values = { name, email, message, intent };
  const errors: ContactState["errors"] = {};

  if (!email) errors.email = "Enter an email so Marci can reply.";
  else if (!EMAIL.test(email)) errors.email = "That email address doesn't look right.";
  if (name.length > 120) errors.name = "That name is too long.";
  if (message.length > 4000) errors.message = "Please keep the message under 4,000 characters.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  // Silently accept bot submissions so they get no signal.
  if (honeypot) return { status: "success" };

  try {
    // ── Wire your delivery here ────────────────────────────────────────────
    // e.g. await resend.emails.send({ to: "marci@…", subject: `${intent} enquiry`, … })
    // Nothing is sent in this build; the assignment has no mail credentials.
    // ───────────────────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 400));
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending that. Please call Marci directly.",
      values,
    };
  }
}
