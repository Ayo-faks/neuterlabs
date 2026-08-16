import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy',
  description:
    'How NeuterLabs collects, uses, and protects personal data, and how we use cookies — in line with UK and EU GDPR.',
  robots: { index: true, follow: true },
}

const sections = [
  {
    title: '1. Who we are',
    body: [
      'NeuterLabs ("we", "us") is an applied AI studio registered in the United Kingdom, with offices at 86-90 Paul Street, London EC2A 4NE. For the purposes of the UK GDPR and EU GDPR, NeuterLabs is the data controller for personal data collected through this website (neuterlabs.com).',
      'If you have any questions about this policy or how we handle your data, contact us at ayoola@neuterlabs.com.',
    ],
  },
  {
    title: '2. What data we collect',
    body: [
      'Contact form data: when you submit our contact form we collect your name, email address, organisation, phone number (optional), your message, and the service you are interested in. This is processed by our form provider, Formspree, and delivered to us by email.',
      'Newsletter data: if you subscribe to our newsletter, we collect your email address. Subscriptions are processed by Formspree and you can withdraw at any time.',
      'Usage data (only with your consent): if you accept analytics cookies, we collect anonymised information about how you use the site — pages visited, approximate location (country/city level), device and browser type, and referral source.',
      'Server logs: our hosting infrastructure records standard technical logs (IP address, request time, user agent) for security and reliability purposes.',
    ],
  },
  {
    title: '3. Lawful bases for processing',
    body: [
      'Consent (Art. 6(1)(a)): analytics cookies and newsletter subscriptions. You can withdraw consent at any time.',
      'Legitimate interests (Art. 6(1)(f)): responding to enquiries you send us, securing and maintaining our website, and defending legal claims.',
      'Contract (Art. 6(1)(b)): where you engage us for services, we process data as needed to deliver them.',
    ],
  },
  {
    title: '4. Cookies and local storage',
    body: [
      'Essential storage: strictly necessary for the site to function — currently a single localStorage entry ("neuterlabs-cookie-consent") that remembers your consent choice. This does not require consent and identifies nothing about you.',
      'Analytics cookies: none are currently set. If we introduce analytics in future, they will load only after you choose "Accept all" in our consent banner. Declining never changes your experience of the site.',
      'Changing your mind: select "Cookie settings" in the footer of any page to reopen the consent banner and change your choice at any time — withdrawing consent is as easy as giving it.',
    ],
  },
  {
    title: '5. Who we share data with',
    body: [
      'We do not sell personal data. We share it only with service providers who help us operate: Formspree, Inc. (contact form and newsletter processing, USA — certified under the EU-U.S. and UK Extension to the Data Privacy Framework), Microsoft Azure (website hosting, UK South region), and Cloudflare (content delivery and security). Each provider processes data under a data processing agreement.',
      'Where any other transfer outside the UK or EEA occurs, it is protected by an adequacy decision, the Data Privacy Framework, or Standard Contractual Clauses.',
    ],
  },
  {
    title: '6. How long we keep data',
    body: [
      'Contact enquiries: up to 24 months after our last exchange, unless an engagement follows.',
      'Newsletter data: until you unsubscribe.',
      'Analytics data: aggregated and retained for up to 26 months.',
      'Server logs: rotated automatically, typically within 90 days.',
    ],
  },
  {
    title: '7. Your rights',
    body: [
      'Under UK and EU GDPR you have the right to: access the personal data we hold about you; have inaccurate data corrected; have your data erased; restrict or object to processing; data portability; and withdraw consent at any time without affecting prior processing.',
      'To exercise any of these rights, email ayoola@neuterlabs.com. We respond within one month.',
      'You also have the right to lodge a complaint with a supervisory authority. In the UK this is the Information Commissioner\'s Office (ico.org.uk); in the EU, your local data protection authority.',
    ],
  },
  {
    title: '8. Security',
    body: [
      'We apply appropriate technical and organisational measures: encryption in transit (TLS), least-privilege access controls, hardened container infrastructure, and regular dependency and security reviews. No system is perfectly secure, but privacy and security are engineered into how we build — for ourselves and for clients.',
    ],
  },
  {
    title: '9. Changes to this policy',
    body: [
      'We may update this policy as our services or the law evolve. Material changes will be flagged on this page with an updated revision date.',
      'Last updated: 16 August 2026.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy & Cookie Policy">
        <p>
          How we collect, use, and protect personal data — and the choices you
          have. Written to meet UK GDPR and EU GDPR requirements, without the
          legalese where plain language will do.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-12 pb-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-semibold text-neutral-950">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-base leading-7 text-neutral-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
