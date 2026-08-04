"use client";

import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  biggestProblemOptions,
  budgetRangeOptions,
  currentSituationOptions,
  desiredStartOptions,
  employeeCountOptions,
  marketingChannelOptions,
  monthlyRevenueOptions,
  paidAdsStatusOptions,
  primaryGoalOptions,
  projectTypeOptions,
  type ContactApplicationPayload,
} from "@/lib/contact-application";
import { TRACKING_EVENTS, trackAnalyticsEvent } from "@/lib/tracking";
import {
  ATTRIBUTION_READY_EVENT,
  getAttributionForForm,
} from "@/lib/attribution";
import {
  createMetaEventId,
  hasMarketingConsent,
  trackMetaLead,
} from "@/lib/meta-pixel";

type FormValues = Required<
  Omit<ContactApplicationPayload, "metaEventId" | "marketingConsent">
>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const steps = [
  { title: "Zu Ihnen", hint: "Person und Unternehmen" },
  { title: "Kontakt", hint: "So erreichen wir Sie" },
  { title: "Vorhaben", hint: "Projekt und Ausgangslage" },
  { title: "Ziel", hint: "Wirkung und Engpass" },
  { title: "Unternehmen", hint: "Werbung, Umsatz und Team" },
  { title: "Investition", hint: "Budget und Zeitpunkt" },
  { title: "Qualifizierung", hint: "Warum Sie zu Codavo passen" },
] as const;

const initialValues: FormValues = {
  salutation: "",
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  websiteUrl: "",
  projectType: "",
  currentSituation: "",
  primaryGoal: "",
  biggestProblem: "",
  marketingChannel: "",
  paidAdsStatus: "",
  monthlyRevenue: "",
  employeeCount: "",
  budgetRange: "",
  desiredStart: "",
  qualification: "",
  privacyAccepted: false,
  fax: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  utm_id: "",
  fbclid: "",
  gclid: "",
  msclkid: "",
  ttclid: "",
  li_fat_id: "",
  landing_page: "",
  referrer: "",
  first_seen_at: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidUrl(value: string) {
  if (!value.trim()) return true;

  try {
    const normalized = value.startsWith("http") ? value : `https://${value}`;
    return Boolean(new URL(normalized).hostname);
  } catch {
    return false;
  }
}

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  error,
  onChange,
  optional = false,
}: {
  id: keyof FormValues;
  label: string;
  value: string;
  options: readonly string[];
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
  optional?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-slate-100">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-slate-500">(optional)</span>
        ) : null}
      </Label>
      <div className="relative mt-2">
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="min-h-12 w-full appearance-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 pr-11 text-sm text-white transition-colors hover:border-white/20 focus:border-indigo-300/70"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function BusinessApplicationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [step, setStep] = useState(0);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const stepHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  const progress = Math.round(((step + 1) / steps.length) * 100);

  const setField = (field: keyof FormValues, value: string | boolean) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setServerError(null);
  };

  const validateStep = (stepIndex: number) => {
    const nextErrors: FormErrors = {};

    if (stepIndex === 0) {
      if (!values.firstName.trim()) {
        nextErrors.firstName = "Bitte Vornamen angeben.";
      }
      if (!values.lastName.trim()) {
        nextErrors.lastName = "Bitte Nachnamen angeben.";
      }
      if (!values.companyName.trim()) {
        nextErrors.companyName = "Bitte Unternehmensnamen angeben.";
      }
    }

    if (stepIndex === 1) {
      if (!values.email.trim()) {
        nextErrors.email = "Bitte E-Mail-Adresse angeben.";
      } else if (!emailPattern.test(values.email)) {
        nextErrors.email = "Bitte eine gültige E-Mail-Adresse angeben.";
      }
      if (!values.phone.trim()) {
        nextErrors.phone = "Bitte Telefonnummer angeben.";
      }
      if (!isValidUrl(values.websiteUrl)) {
        nextErrors.websiteUrl = "Bitte eine gültige Website-Adresse angeben.";
      }
    }

    if (stepIndex === 2) {
      if (!values.projectType) {
        nextErrors.projectType = "Bitte Projektart auswählen.";
      }
      if (!values.currentSituation) {
        nextErrors.currentSituation = "Bitte Ausgangslage auswählen.";
      }
    }

    if (stepIndex === 3) {
      if (!values.primaryGoal) {
        nextErrors.primaryGoal = "Bitte wichtigstes Ziel auswählen.";
      }
      if (!values.biggestProblem) {
        nextErrors.biggestProblem = "Bitte größten Engpass auswählen.";
      }
    }

    if (stepIndex === 4) {
      if (!values.marketingChannel) {
        nextErrors.marketingChannel = "Bitte wichtigsten Kanal auswählen.";
      }
      if (!values.paidAdsStatus) {
        nextErrors.paidAdsStatus =
          "Bitte angeben, ob Sie bereits Werbeanzeigen schalten.";
      }
      if (!values.monthlyRevenue) {
        nextErrors.monthlyRevenue =
          "Bitte aktuellen Monatsumsatz auswählen.";
      }
      if (!values.employeeCount) {
        nextErrors.employeeCount = "Bitte Unternehmensgröße auswählen.";
      }
    }

    if (stepIndex === 5) {
      if (!values.budgetRange) {
        nextErrors.budgetRange = "Bitte Budgetrahmen auswählen.";
      }
      if (!values.desiredStart) {
        nextErrors.desiredStart = "Bitte gewünschten Start auswählen.";
      }
    }

    if (stepIndex === 6) {
      if (values.qualification.trim().length < 20) {
        nextErrors.qualification =
          "Bitte qualifizieren Sie sich in mindestens 20 Zeichen.";
      }
      if (!values.privacyAccepted) {
        nextErrors.privacyAccepted =
          "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const focusFirstError = () => {
    window.requestAnimationFrame(() => {
      const firstInvalidField = formRef.current?.querySelector<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >("[aria-invalid='true']");
      firstInvalidField?.focus();
    });
  };

  const goForward = () => {
    if (!validateStep(step)) {
      focusFirstError();
      return;
    }

    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => {
    setErrors({});
    setServerError(null);
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step < steps.length - 1) {
      goForward();
      return;
    }

    if (!validateStep(step)) {
      focusFirstError();
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const metaEventId = createMetaEventId("contact-application");
      const marketingConsent = hasMarketingConsent();
      const response = await fetch("/api/contact-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          metaEventId,
          marketingConsent,
        }),
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setServerError(
          payload.error ||
            "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.",
        );
        return;
      }

      trackAnalyticsEvent(TRACKING_EVENTS.contactApplicationSubmit, {
        page_path: "/kontakt",
        cta_label: "B2B-Bewerbung",
        project_type: values.projectType,
        budget_range: values.budgetRange,
      });
      trackMetaLead(metaEventId, "B2B-Bewerbung");
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
    const syncAttribution = () => {
      setValues((current) => ({
        ...current,
        ...getAttributionForForm(),
      }));
    };

    syncAttribution();
    window.addEventListener(ATTRIBUTION_READY_EVENT, syncAttribution);
    return () => {
      window.removeEventListener(ATTRIBUTION_READY_EVENT, syncAttribution);
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      successRef.current?.focus();
      return;
    }

    stepHeadingRef.current?.focus();
  }, [isSuccess, step]);

  if (isSuccess) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="card border border-emerald-400/20 bg-emerald-500/10 p-6 outline-none sm:p-9"
      >
        <div className="flex items-start gap-4">
          <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-emerald-300" />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Vielen Dank für Ihre Bewerbung
            </h2>
            <p className="mt-3 leading-7 text-slate-200">
              Wir prüfen Ihre Angaben persönlich und melden uns zeitnah bei
              Ihnen, wenn ein kostenloses Erstgespräch sinnvoll erscheint.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
              und zur Vorbereitung eines möglichen Projekts verwendet.
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
      className="card overflow-hidden p-0"
        aria-label="Bewerbung für ein kostenloses Erstgespräch"
    >
      <div className="border-b border-white/10 bg-white/[0.025] px-5 py-5 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
              Schritt {step + 1} von {steps.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">{steps[step].hint}</p>
          </div>
          <span className="text-sm font-medium text-slate-300">{progress} %</span>
        </div>
        <div
          className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={step + 1}
          aria-label={`Schritt ${step + 1} von ${steps.length}`}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="px-5 py-7 sm:px-8 sm:py-9">
        <h2
          ref={stepHeadingRef}
          tabIndex={-1}
          className="text-2xl font-semibold tracking-tight text-white outline-none sm:text-3xl"
        >
          {steps[step].title}
        </h2>

        <div className="mt-7">
          {step === 0 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                id="salutation"
                label="Anrede"
                value={values.salutation}
                options={["Frau", "Herr", "Divers / keine Angabe"]}
                placeholder="Bitte auswählen"
                optional
                onChange={(value) => setField("salutation", value)}
              />
              <div className="hidden sm:block" aria-hidden="true" />
              <TextField
                id="firstName"
                label="Vorname"
                value={values.firstName}
                error={errors.firstName}
                autoComplete="given-name"
                onChange={(value) => setField("firstName", value)}
              />
              <TextField
                id="lastName"
                label="Nachname"
                value={values.lastName}
                error={errors.lastName}
                autoComplete="family-name"
                onChange={(value) => setField("lastName", value)}
              />
              <div className="sm:col-span-2">
                <TextField
                  id="companyName"
                  label="Unternehmen"
                  value={values.companyName}
                  error={errors.companyName}
                  autoComplete="organization"
                  onChange={(value) => setField("companyName", value)}
                />
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                id="email"
                label="Geschäftliche E-Mail-Adresse"
                type="email"
                value={values.email}
                error={errors.email}
                autoComplete="email"
                onChange={(value) => setField("email", value)}
              />
              <TextField
                id="phone"
                label="Telefonnummer"
                type="tel"
                value={values.phone}
                error={errors.phone}
                autoComplete="tel"
                onChange={(value) => setField("phone", value)}
              />
              <div className="sm:col-span-2">
                <TextField
                  id="websiteUrl"
                  label="Aktuelle Website"
                  type="url"
                  value={values.websiteUrl}
                  error={errors.websiteUrl}
                  autoComplete="url"
                  placeholder="www.ihr-unternehmen.de"
                  optional
                  onChange={(value) => setField("websiteUrl", value)}
                />
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-6">
              <SelectField
                id="projectType"
                label="Worum geht es bei Ihrem Projekt?"
                value={values.projectType}
                options={projectTypeOptions}
                placeholder="Projektart auswählen"
                error={errors.projectType}
                onChange={(value) => setField("projectType", value)}
              />
              <SelectField
                id="currentSituation"
                label="Welche Ausgangslage beschreibt Sie am besten?"
                value={values.currentSituation}
                options={currentSituationOptions}
                placeholder="Ausgangslage auswählen"
                error={errors.currentSituation}
                onChange={(value) => setField("currentSituation", value)}
              />
            </div>
          ) : null}

          {step === 3 ? (
            <div className="grid gap-6">
              <SelectField
                id="primaryGoal"
                label="Was soll das Projekt vor allem bewirken?"
                value={values.primaryGoal}
                options={primaryGoalOptions}
                placeholder="Wichtigstes Ziel auswählen"
                error={errors.primaryGoal}
                onChange={(value) => setField("primaryGoal", value)}
              />
              <SelectField
                id="biggestProblem"
                label="Was ist aktuell Ihr größter Engpass?"
                value={values.biggestProblem}
                options={biggestProblemOptions}
                placeholder="Größten Engpass auswählen"
                error={errors.biggestProblem}
                onChange={(value) => setField("biggestProblem", value)}
              />
            </div>
          ) : null}

          {step === 4 ? (
            <div className="grid gap-6">
              <SelectField
                id="marketingChannel"
                label="Wie gewinnen Sie aktuell überwiegend neue Kunden?"
                value={values.marketingChannel}
                options={marketingChannelOptions}
                placeholder="Wichtigsten Kanal auswählen"
                error={errors.marketingChannel}
                onChange={(value) => setField("marketingChannel", value)}
              />
              <SelectField
                id="paidAdsStatus"
                label="Schalten Sie bereits bezahlte Werbeanzeigen, zum Beispiel auf Google, Meta oder LinkedIn?"
                value={values.paidAdsStatus}
                options={paidAdsStatusOptions}
                placeholder="Bitte auswählen"
                error={errors.paidAdsStatus}
                onChange={(value) => setField("paidAdsStatus", value)}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  id="employeeCount"
                  label="Wie viele festangestellte Mitarbeitende haben Sie?"
                  value={values.employeeCount}
                  options={employeeCountOptions}
                  placeholder="Größe auswählen"
                  error={errors.employeeCount}
                  onChange={(value) => setField("employeeCount", value)}
                />
                <SelectField
                  id="monthlyRevenue"
                  label="Wie hoch ist Ihr aktueller Monatsumsatz?"
                  value={values.monthlyRevenue}
                  options={monthlyRevenueOptions}
                  placeholder="Umsatz auswählen"
                  error={errors.monthlyRevenue}
                  onChange={(value) => setField("monthlyRevenue", value)}
                />
              </div>
            </div>
          ) : null}

          {step === 5 ? (
            <div className="grid gap-6">
              <SelectField
                id="budgetRange"
                label="Wie viel können und möchten Sie investieren, um Ihr Ziel zu erreichen?"
                value={values.budgetRange}
                options={budgetRangeOptions}
                placeholder="Budgetrahmen auswählen"
                error={errors.budgetRange}
                onChange={(value) => setField("budgetRange", value)}
              />
              <SelectField
                id="desiredStart"
                label="Wann möchten Sie starten?"
                value={values.desiredStart}
                options={desiredStartOptions}
                placeholder="Zeitraum auswählen"
                error={errors.desiredStart}
                onChange={(value) => setField("desiredStart", value)}
              />
            </div>
          ) : null}

          {step === 6 ? (
            <div>
              <Label
                htmlFor="qualification"
                className="text-sm font-medium text-slate-100"
              >
                Warum sollte ich ausgerechnet mit Ihnen zusammenarbeiten?
              </Label>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Was unterscheidet Sie von anderen Bewerbern und warum sollte
                ich Sie kostenlos beraten?{" "}
                <span className="font-medium text-slate-300">
                  (Ich erhalte viele Anfragen.)
                </span>
              </p>
              <textarea
                id="qualification"
                value={values.qualification}
                onChange={(event) =>
                  setField("qualification", event.target.value)
                }
                rows={6}
                maxLength={3000}
                aria-invalid={Boolean(errors.qualification)}
                aria-describedby={
                  errors.qualification ? "qualification-error" : undefined
                }
                className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm leading-6 text-white placeholder:text-slate-600 hover:border-white/20 focus:border-indigo-300/70"
                placeholder="Warum ist Ihr Vorhaben für Codavo besonders interessant und warum passen wir gut zusammen?"
              />
              <div className="mt-2 flex justify-between gap-4 text-xs">
                {errors.qualification ? (
                  <p id="qualification-error" className="text-rose-300">
                    {errors.qualification}
                  </p>
                ) : (
                  <span className="text-slate-500">Mindestens 20 Zeichen</span>
                )}
                <span className="shrink-0 text-slate-500">
                  {values.qualification.length}/3000
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                <div className="flex items-start gap-3">
                  <input
                    id="privacyAccepted"
                    type="checkbox"
                    checked={values.privacyAccepted}
                    onChange={(event) =>
                      setField("privacyAccepted", event.target.checked)
                    }
                    aria-invalid={Boolean(errors.privacyAccepted)}
                    aria-describedby={
                      errors.privacyAccepted
                        ? "privacyAccepted-error"
                        : "privacyAccepted-hint"
                    }
                    className="mt-1 h-5 w-5 shrink-0 accent-indigo-500"
                  />
                  <Label
                    htmlFor="privacyAccepted"
                    id="privacyAccepted-hint"
                    className="text-sm font-normal leading-6 text-slate-300"
                  >
                    Ich stimme zu, dass Codavo Webstudio meine Kontakt-,
                    Unternehmens-, Umsatz-, Budget- und Projektdaten zur
                    Bearbeitung meiner Bewerbung per E-Mail übermittelt und
                    verarbeitet. Weitere Informationen enthält die{" "}
                    <Link
                      href="/datenschutz"
                      target="_blank"
                      className="text-indigo-300 underline underline-offset-2 hover:text-white"
                    >
                      Datenschutzerklärung
                    </Link>
                    .
                  </Label>
                </div>
                {errors.privacyAccepted ? (
                  <p
                    id="privacyAccepted-error"
                    className="mt-2 pl-8 text-sm text-rose-300"
                  >
                    {errors.privacyAccepted}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>

        <input
          type="text"
          name="fax"
          value={values.fax}
          onChange={(event) => setField("fax", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px] h-px w-px opacity-0"
          aria-hidden="true"
        />

        {serverError ? (
          <div
            role="alert"
            className="mt-6 flex items-start gap-3 rounded-xl border border-rose-400/20 bg-rose-500/10 p-4 text-sm text-rose-100"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-300" />
            <p>
              {serverError} Alternativ erreichen Sie uns unter{" "}
              <a
                href="mailto:kontakt@codavo-webstudio.de"
                className="font-medium underline underline-offset-2"
              >
                kontakt@codavo-webstudio.de
              </a>
              .
            </p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              Zurück
            </button>
          ) : (
            <p className="text-xs leading-5 text-slate-500">
              Ihre Bewerbung wird kostenlos und persönlich geprüft.
            </p>
          )}

          {step < steps.length - 1 ? (
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:brightness-110"
            >
              Weiter
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Bewerbung wird gesendet
                </>
              ) : (
                <>
                  Bewerbung für Erstgespräch absenden
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

function TextField({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
  optional = false,
}: {
  id: keyof FormValues;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-slate-100">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-slate-500">(optional)</span>
        ) : null}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 min-h-12 rounded-xl border-white/10 bg-slate-950/70 px-4 text-white placeholder:text-slate-600 hover:border-white/20 focus:border-indigo-300/70"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
