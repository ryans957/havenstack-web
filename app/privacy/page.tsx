export const metadata = {
  title: "Privacy Policy | HavenStack",
  description: "Privacy Policy for HavenStack (havenstack.ai).",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <header className="mb-14 sm:mb-16">
          <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
            HavenStack Legal Documentation
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-600">
            Effective date: <strong>February 26, 2026</strong>
          </p>
        </header>

        <div className="prose prose-slate prose-p:leading-relaxed prose-p:my-4 prose-ul:my-6 prose-li:my-2 prose-headings:mb-4 max-w-none">
          <p className="mb-8">
            This Privacy Policy explains how HavenStack (“HavenStack,” “we,”
            “us,” or “our”) collects, uses, and shares information when you visit
            our website or use our services (the “Services”). Our website is
            located at <strong>havenstack.ai</strong>.
          </p>

          <h2 className="mt-14 first:mt-0">1. Information we collect</h2>
          <ul>
            <li>
              <strong>Contact information:</strong> such as your name, email
              address, phone number, business name, and industry when
              you submit forms, request early access, or contact us.
            </li>
            <li>
              <strong>Communication data:</strong> when you communicate with us
              via email, phone, SMS, web forms, or other channels.
            </li>
            <li>
              <strong>Usage data:</strong> basic analytics about how you use our
              site (e.g., pages viewed, device type). We may use cookies for this purpose.
            </li>
            <li>
              <strong>Customer content:</strong> If you use our platform, you may connect business
              data such as messages, call logs, and documents. We process that content to provide the Services.
            </li>
          </ul>

          <h2 className="mt-14">2. How we use information</h2>
          <ul>
            <li>Provide, operate, and improve the HavenStack platform.</li>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Send service-related communications and updates.</li>
            <li>
              Protect against fraud and comply with legal obligations.
            </li>
          </ul>

          <h2 className="mt-14">3. SMS and messaging privacy</h2>
          <p>
            If you provide your phone number, you may receive SMS messages
            related to HavenStack (including onboarding, support, or product
            updates). Message frequency may vary.
            Message and data rates may apply. Consent to receive messages is not
            a condition of purchase.
          </p>

          <div className="bg-slate-50 p-6 border-l-4 border-teal-500 my-6">
            <p className="font-semibold text-slate-900 mb-2">Carrier Compliance Disclosure:</p>
            <p className="italic text-sm leading-relaxed">
              Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We do not sell your personal information or SMS opt-in consent.
            </p>
          </div>

          <ul>
            <li>
              <strong>Opt-out:</strong> Reply <strong>STOP</strong> to opt out of
              SMS messages.
            </li>
            <li>
              <strong>Help:</strong> Reply <strong>HELP</strong> for help or
              contact us at{" "}
              <a href="mailto:support@havenstack.ai" className="text-teal-600 underline">support@havenstack.ai</a>.
            </li>
          </ul>

          <h2 className="mt-14">4. How we share information</h2>
          <p>We may share information in limited circumstances:</p>
          <ul>
            <li>
              <strong>Service providers:</strong> Vendors who help us operate (e.g., hosting, analytics, and telephony providers like Twilio). They process data only on our behalf and are prohibited from using it for their own marketing.
            </li>
            <li>
              <strong>Legal and safety:</strong> To comply with law or respond to
              lawful requests.
            </li>
          </ul>
          <p className="text-sm text-slate-600">
            Notwithstanding any other section of this policy, text messaging originator opt-in data and consent will not be shared with any third parties for their own marketing or promotional purposes.
          </p>

          <h2 className="mt-14">5. Data retention & Security</h2>
          <p>
            We keep information for as long as necessary to provide the Services. We use reasonable technical measures designed to protect your information, though no method is 100% secure.
          </p>

          <h2 className="mt-14">6. Your choices</h2>
          <ul>
            <li>
              <strong>Marketing emails:</strong> Use the unsubscribe link in our emails.
            </li>
            <li>
              <strong>SMS:</strong> Reply <strong>STOP</strong> to opt out.
            </li>
            <li>
              <strong>Access/updates:</strong> Contact us to request access or deletion of your data.
            </li>
          </ul>

          <h2 className="mt-14">7. Contact</h2>
          <p>
            Questions? Contact us at{" "}
            <a href="mailto:privacy@havenstack.ai" className="text-teal-600 underline">privacy@havenstack.ai</a>.
          </p>

          <p className="mt-10 text-sm text-slate-600">
            See also our <a href="/terms" className="underline">Terms of Service</a>.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <a className="hover:text-teal-600 transition-colors" href="/">
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}