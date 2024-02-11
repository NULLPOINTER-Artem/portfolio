'use client'

import IconImporterClient from "@/components/IconImporterClient";

export default function Loading() {
  return (
    <main className="loading">
      <IconImporterClient
        className="loading__icon"
        name-icon="loader.svg"
      />
    </main>
  )
}
