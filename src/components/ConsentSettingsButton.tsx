"use client";

import { CONSENT_STORAGE_KEY } from "@/lib/consent";

export default function ConsentSettingsButton() {
  function resetConsent() {
    try {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    } finally {
      window.location.reload();
    }
  }

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="font-medium text-indigo-300 underline decoration-indigo-300/40 underline-offset-4 transition hover:text-white"
    >
      Cookie-Auswahl ändern
    </button>
  );
}
