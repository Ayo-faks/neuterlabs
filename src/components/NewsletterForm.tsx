'use client'

import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function NewsletterForm() {
  const [state, handleSubmit] = useForm('xwpgpjdr')

  if (state.succeeded) {
    return (
      <div className="max-w-sm">
        <h2 className="font-display text-sm font-semibold tracking-widest text-neutral-950 uppercase">
          You&apos;re subscribed
        </h2>
        <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
          Thanks — we&apos;ll send occasional insights on applied AI. You can
          unsubscribe at any time by replying to any email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-widest text-neutral-950 uppercase">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
        Occasional insights on AI strategy, agents, and production engineering.
        No spam.
      </p>
      <input type="hidden" name="form-type" value="newsletter" />
      <div className="relative mt-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          required
          className="block w-full border border-neutral-200 bg-white py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition-colors duration-200 placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 hover:border-neutral-300"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            disabled={state.submitting}
            className="flex aspect-square h-full items-center justify-center bg-neutral-950 text-gold-50 transition-colors duration-200 hover:bg-neutral-800 disabled:opacity-60"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <p className="mt-3 text-xs leading-5 text-neutral-500">
        By subscribing you consent to us storing your email to send the
        newsletter. Withdraw any time. See our{' '}
        <Link
          href="/privacy"
          className="underline underline-offset-2 hover:text-neutral-950"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}
