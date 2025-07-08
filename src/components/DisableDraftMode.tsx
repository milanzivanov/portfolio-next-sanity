"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <a
      href="/api/draft-mode/disable"
      className="rounded-full fixed bottom-4 left-4 bg-gray-50 px-4 py-2"
    >
      Disable Draft Mode
    </a>
  );
}
