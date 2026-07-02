"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  LoaderCircle,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TRACKING_EVENTS, trackAnalyticsEvent } from "@/lib/tracking";

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  websiteUrl: string;
  phone: string;
  industry: string;
  biggestProblem: string;
  fax: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  utm_id: string;
  fbclid: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  websiteUrl: "",
  phone: "",
  industry: "",
  biggestProblem: "",
  fax: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  utm_id: "",
  fbclid: "",
};

const biggestProblemOptions = [
  "Zu wenig Anfragen",
  "Website wirkt veraltet",
  "Schlechte mobile Nutzererfahrung",
  "Angebot wird nicht klar kommuniziert",
  "Unsicher, wo ich ansetzen soll",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidUrl(value: string) {
  try {
    const normalized = value.startsWith("http") ? value : `https://${value}`;
    const url = new URL(normalized);
    return Boolean(url.hostname);
  } catch {
    return false;
  }
}

export default function WebsiteCheckForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.firstName.trim()) {
      nextErrors.firstName = "Bitte Vornamen angeben.";
    }
    if (!values.lastName.trim()) {
      nextErrors.lastName = "Bitte Nachnamen angeben.";
    }
    if (!values.companyName.trim()) {
      nextErrors.companyName = "Bitte Firmennamen angeben.";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Bitte E-Mail-Adresse angeben.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Bitte eine gültige E-Mail-Adresse angeben.";
    }
    if (!values.websiteUrl.trim()) {
      nextErrors.websiteUrl = "Bitte Website-URL angeben.";
    } else if (!isValidUrl(values.websiteUrl)) {
      nextErrors.websiteUrl = "Bitte eine gültige Website-URL angeben.";
    }
    if (!values.phone.trim()) {
      nextErrors.phone = "Bitte Telefonnummer oder WhatsApp angeben.";
    }
    if (!values.biggestProblem) {
      nextErrors.biggestProblem =
        "Bitte das aktuell größte Problem auswählen.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormValues) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const nextValue = event.target.value;
      setValues((current) => ({ ...current, [field]: nextValue }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      setServerError(null);
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate();

    if (!isValid) {
      const firstInvalidField = formRef.current?.querySelector<
        HTMLInputElement | HTMLSelectElement
      >("[aria-invalid='true']");
      firstInvalidField?.focus();
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/website-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setServerError(
          payload.error ||
            "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.",
        );
        return;
      }

      trackAnalyticsEvent(TRACKING_EVENTS.websiteCheckSubmit, {
        page_path: "/website-check",
        cta_label: "Website-Check Formular",
      });
      setIsSuccess(true);
      setValues(initialValues);
      setErrors({});
    } catch {
      setServerError(
        "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isSuccess) return;
    successRef.current?.focus();
  }, [isSuccess]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    setValues((current) => ({
      ...current,
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      utm_term: searchParams.get("utm_term") || "",
      utm_id: searchParams.get("utm_id") || "",
      fbclid: searchParams.get("fbclid") || "",
    }));
  }, []);

  if (isSuccess) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="card border border-emerald-400/20 bg-emerald-500/10 p-6 outline-none sm:p-8"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Vielen Dank – Ihre Anfrage ist eingegangen
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              Wir prüfen Ihre Website und melden uns mit einer ersten
              Einschätzung bei Ihnen.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Nächster Schritt: Wir sehen uns Ihren Auftritt individuell an und
              kommen zeitnah mit einer ersten Einschätzung auf Sie zu.
            </p>
            <p className="mt-4 text-xs text-slate-300">
              Hinweise zum Datenschutz finden Sie in unserer{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 hover:text-white"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="card p-5 sm:p-8"
      aria-describedby="website-check-form-hint"
    >
      <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5">
        <p className="text-sm font-medium text-white">
          Wenige Angaben reichen für die Anfrage.
        </p>
        <p
          id="website-check-form-hint"
          className="mt-2 text-sm leading-6 text-slate-300"
        >
          Wir benötigen nur Ihre Kontaktdaten, Ihre Website und das aktuell
          wichtigste Thema.
        </p>
        <p className="mt-3 text-xs text-slate-400">* Pflichtfelder</p>
      </div>

      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-slate-100">
            Vorname <span className="text-indigo-300">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={handleChange("firstName")}
            aria-invalid={Boolean(errors.firstName)}
            className="h-11 border-white/10 bg-white/5 text-slate-100 focus-visible:ring-indigo-500/25"
          />
          {errors.firstName ? (
            <p className="text-sm text-rose-300">{errors.firstName}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-slate-100">
            Nachname <span className="text-indigo-300">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={handleChange("lastName")}
            aria-invalid={Boolean(errors.lastName)}
            className="h-11 border-white/10 bg-white/5 text-slate-100 focus-visible:ring-indigo-500/25"
          />
          {errors.lastName ? (
            <p className="text-sm text-rose-300">{errors.lastName}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-slate-100">
            Firmenname <span className="text-indigo-300">*</span>
          </Label>
          <Input
            id="companyName"
            name="companyName"
            autoComplete="organization"
            value={values.companyName}
            onChange={handleChange("companyName")}
            aria-invalid={Boolean(errors.companyName)}
            className="h-11 border-white/10 bg-white/5 text-slate-100 focus-visible:ring-indigo-500/25"
          />
          {errors.companyName ? (
            <p className="text-sm text-rose-300">{errors.companyName}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-100">
            E-Mail <span className="text-indigo-300">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            className="h-11 border-white/10 bg-white/5 text-slate-100 focus-visible:ring-indigo-500/25"
          />
          {errors.email ? (
            <p className="text-sm text-rose-300">{errors.email}</p>
          ) : null}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="websiteUrl" className="text-slate-100">
            Website-URL <span className="text-indigo-300">*</span>
          </Label>
          <Input
            id="websiteUrl"
            name="websiteUrl"
            type="url"
            inputMode="url"
            placeholder="https://www.ihre-website.de"
            value={values.websiteUrl}
            onChange={handleChange("websiteUrl")}
            aria-invalid={Boolean(errors.websiteUrl)}
            className="h-11 border-white/10 bg-white/5 text-slate-100 focus-visible:ring-indigo-500/25"
          />
          {errors.websiteUrl ? (
            <p className="text-sm text-rose-300">{errors.websiteUrl}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-100">
            Telefonnummer / WhatsApp{" "}
            <span className="text-indigo-300">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            className="h-11 border-white/10 bg-white/5 text-slate-100 focus-visible:ring-indigo-500/25"
          />
          {errors.phone ? (
            <p className="text-sm text-rose-300">{errors.phone}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry" className="text-slate-100">
            Branche
          </Label>
          <Input
            id="industry"
            name="industry"
            value={values.industry}
            onChange={handleChange("industry")}
            className="h-11 border-white/10 bg-white/5 text-slate-100 focus-visible:ring-indigo-500/25"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="biggestProblem" className="text-slate-100">
            Was ist aktuell Ihr größtes Problem?{" "}
            <span className="text-indigo-300">*</span>
          </Label>
          <div className="relative">
            <select
              id="biggestProblem"
              name="biggestProblem"
              value={values.biggestProblem}
              onChange={handleChange("biggestProblem")}
              aria-invalid={Boolean(errors.biggestProblem)}
              className="flex h-11 w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 pr-11 text-sm text-slate-100 outline-none transition focus:border-indigo-400/70 focus:ring-4 focus:ring-indigo-500/20"
            >
              <option value="" className="bg-slate-950 text-slate-300">
                Bitte auswählen
              </option>
              {biggestProblemOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-slate-950 text-slate-100"
                >
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
          {errors.biggestProblem ? (
            <p className="text-sm text-rose-300">{errors.biggestProblem}</p>
          ) : null}
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <Label htmlFor="fax">Fax</Label>
        <Input
          id="fax"
          name="fax"
          tabIndex={-1}
          autoComplete="off"
          value={values.fax}
          onChange={handleChange("fax")}
        />
      </div>

      <input type="hidden" name="utm_source" value={values.utm_source} />
      <input type="hidden" name="utm_medium" value={values.utm_medium} />
      <input type="hidden" name="utm_campaign" value={values.utm_campaign} />
      <input type="hidden" name="utm_content" value={values.utm_content} />
      <input type="hidden" name="utm_term" value={values.utm_term} />
      <input type="hidden" name="utm_id" value={values.utm_id} />
      <input type="hidden" name="fbclid" value={values.fbclid} />

      {serverError ? (
        <div
          className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
          role="alert"
        >
          <div className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{serverError}</p>
          </div>
        </div>
      ) : null}

      <div className="mt-6 border-t border-white/10 pt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Anfrage wird gesendet
            </>
          ) : (
            "Kostenlosen Check anfordern"
          )}
        </button>
        <p className="mt-3 text-center text-xs text-slate-400">
          Kostenlos, unverbindlich und ohne automatisierten Standardreport.
        </p>
        <p className="mt-2 text-center text-xs text-slate-500">
          Ihre Anfrage geht direkt an Codavo und wird individuell geprüft.
        </p>
      </div>
    </form>
  );
}
