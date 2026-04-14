"use client";

type ScrollToFormButtonProps = {
  className: string;
  children: React.ReactNode;
  targetId?: string;
  dataTrackEvent?: string;
  dataTrackLabel?: string;
  dataGoogleAdsConversion?: string;
};

export default function ScrollToFormButton({
  className,
  children,
  targetId = "website-check-form",
  dataTrackEvent,
  dataTrackLabel,
  dataGoogleAdsConversion,
}: ScrollToFormButtonProps) {
  const handleClick = () => {
    const formSection = document.getElementById(targetId);
    if (!formSection) return;

    formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-controls={targetId}
      {...(dataTrackEvent ? { "data-track-event": dataTrackEvent } : {})}
      {...(dataTrackLabel ? { "data-track-label": dataTrackLabel } : {})}
      {...(dataGoogleAdsConversion
        ? { "data-google-ads-conversion": dataGoogleAdsConversion }
        : {})}
    >
      {children}
    </button>
  );
}
