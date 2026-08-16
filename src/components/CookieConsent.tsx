'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'neuterlabs-cookie-consent'

type ConsentValue = 'accepted' | 'essential-only'

function readConsent(): ConsentValue | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY)
    return value === 'accepted' || value === 'essential-only' ? value : null
  } catch {
    return null
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!readConsent()) setVisible(true)
  }, [])

  function decide(value: ConsentValue) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value)
    } catch {
      // Storage unavailable (e.g. private mode) — still hide for this session.
    }
    window.dispatchEvent(new CustomEvent('neuterlabs:consent', { detail: value }))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-gold-400/30 bg-black/95 text-gold-50 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold text-gold-200">
            Your privacy
          </p>
          <p className="mt-2 text-sm leading-6 text-gold-100/70">
            We use essential cookies to make this site work. With your consent,
            we also use analytics cookies to understand how the site is used and
            improve it. You can change your choice at any time. See our{' '}
            <Link
              href="/privacy"
              className="font-semibold text-gold-300 underline underline-offset-4 transition-colors hover:text-gold-200"
            >
              Privacy &amp; Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-none flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => decide('essential-only')}
            className="inline-flex min-h-11 items-center justify-center border border-gold-400/40 px-6 py-2.5 text-sm font-semibold text-gold-100 transition-colors hover:border-gold-300 hover:bg-gold-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="inline-flex min-h-11 items-center justify-center bg-gold-400 px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
