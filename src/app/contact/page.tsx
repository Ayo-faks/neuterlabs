'use client'

import { useId } from 'react'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  const id = useId()

  return (
    <div className="group relative z-0 transition-all duration-300 focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-200 bg-white px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition-colors duration-200 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-none group-last:rounded-b-none hover:border-neutral-300"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3 cursor-pointer group">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border-2 border-neutral-300 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 transition-all duration-300 group-hover:border-neutral-400"
      />
      <span className="text-base/6 text-neutral-700 group-hover:text-neutral-950 transition-colors duration-300">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xwpgpjdr")
  
  if (state.succeeded) {
    return (
      <FadeIn className="lg:order-last">
        <div className="bg-neutral-950 p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 border border-white/20 mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-semibold text-white mb-4">
            Thank you for reaching out!
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            We&apos;ve received your partnership inquiry and will get back to you within 24 hours.
          </p>
        </div>
      </FadeIn>
    )
  }
  
  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950 tracking-wide">
          Get in Touch
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Tell us about your needs and we&apos;ll get back to you.
        </p>
        <div className="isolate mt-8 -space-y-px bg-white ring-1 ring-neutral-950/5">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          
          <TextInput
            label="Organization"
            name="company"
            autoComplete="organization"
            required
          />
          <ValidationError prefix="Company" field="company" errors={state.errors} />
          
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          
          <TextInput label="Message" name="message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          
          <div className="border border-neutral-200 bg-white px-6 py-8">
            <fieldset>
              <legend className="text-base/6 text-neutral-600 font-medium">I am interested in...</legend>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <RadioInput label="WULO (Speech Therapy)" name="interest" value="wulo" />
                <RadioInput label="Clinical Ambient Scribe" name="interest" value="scribe" />
                <RadioInput label="Research Collaboration" name="interest" value="research" />
                <RadioInput label="Other" name="interest" value="other" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10 w-full sm:w-auto" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Start the conversation'}
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950 tracking-wide">
        Reach Out
      </h2>
      <p className="mt-6 text-base text-neutral-600 leading-relaxed">
        Whether you&apos;re a clinician, researcher, parent, or organization interested in our products or research — we&apos;d love to hear from you.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950 tracking-wide">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['General', 'ayoola@neuterlabs.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950 transition-colors duration-300"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let&apos;s talk">
        <p>We&apos;re building AI for healthcare. If you&apos;re interested in our products, research, or partnerships — reach out.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-12 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
