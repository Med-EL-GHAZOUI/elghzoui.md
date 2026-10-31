"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (name: string, email: string, message: string): FieldErrors => {
  const errors: FieldErrors = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-line-strong bg-ink-900/70 px-4 py-3 text-base text-paper placeholder:text-mute/70 transition-colors focus-visible:border-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40 aria-[invalid=true]:border-red-400";

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ACCESS_KEY || status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const found = validate(name, email, message);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      setFeedback("Please fix the highlighted fields.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${name}`,
          from_name: "Portfolio contact form",
          name,
          email,
          message,
          botcheck: String(data.get("botcheck") ?? ""),
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Request rejected");

      setStatus("success");
      setFeedback("Message sent. Thank you, I will reply to the email address you provided.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("The message could not be sent. Please try again or email me directly.");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8" aria-label="Contact form">
      <p className="text-sm text-mute">
        Your name, email and message are used only to reply to you, and are delivered through Web3Forms.
      </p>

      <label className="block text-sm font-medium" htmlFor="contact-name">
        Name
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={inputClass}
        />
        {errors.name && (
          <span id="contact-name-error" className="mt-1 block text-sm text-red-300">
            {errors.name}
          </span>
        )}
      </label>

      <label className="block text-sm font-medium" htmlFor="contact-email">
        Email
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={inputClass}
        />
        {errors.email && (
          <span id="contact-email-error" className="mt-1 block text-sm text-red-300">
            {errors.email}
          </span>
        )}
      </label>

      <label className="block text-sm font-medium" htmlFor="contact-message">
        Message
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(inputClass, "resize-y")}
        />
        {errors.message && (
          <span id="contact-message-error" className="mt-1 block text-sm text-red-300">
            {errors.message}
          </span>
        )}
      </label>

      {/* Honeypot: hidden from people, filled by bots. */}
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "sending"}>
          <Send size={16} aria-hidden /> {status === "sending" ? "Sending…" : "Send message"}
        </Button>
        <p
          role="status"
          aria-live="polite"
          className={cn("text-sm", status === "success" ? "text-emerald-300" : "text-red-300")}
        >
          {feedback}
        </p>
      </div>
    </form>
  );
};
