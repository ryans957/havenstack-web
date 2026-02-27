export const metadata = {
  title: "Terms of Service | HavenStack",
  description: "Terms of Service for HavenStack (havenstack.ai).",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <header className="mb-14 sm:mb-16">
          <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
            HavenStack Legal Documentation
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-slate-600">
            Effective date: <strong>February 26, 2026</strong>
          </p>
        </header>

        <div className="prose prose-slate prose-p:leading-relaxed prose-p:my-4 prose-ul:my-6 prose-li:my-2 prose-headings:mb-4 max-w-none">
          <p className="mb-8">
            These Terms of Service (“Terms”) govern your access to and use of the
            HavenStack website and services (the “Services”). By accessing or
            using the Services, you agree to these Terms. If you do not agree,
            do not use the Services.
          </p>

          <h2 className="mt-14 first:mt-0">1. Description of Services</h2>
          <p>
            HavenStack provides an AI-powered operations platform for
            service-based businesses. Features may include (but are not limited
            to) call and message capture, automated follow-ups, scheduling
            workflows, transcription, document processing, and operational
            tooling. Features may change over time as we improve the Services.
          </p>

          <h2 className="mt-14">2. Eligibility and accounts</h2>
          <ul>
            <li>You must be at least 18 years old to use the Services.</li>
            <li>
              You are responsible for maintaining the security of your account
              credentials and for all activity under your account.
            </li>
            <li>
              You agree to provide accurate information and keep it reasonably
              up to date.
            </li>
          </ul>

          <h2 className="mt-14">3. Acceptable use &amp; compliance</h2>
          <p>You agree not to misuse the Services. Specifically:</p>
          <ul>
            <li>You will not use the Services for any illegal purpose.</li>
            <li>
              You will not attempt to gain unauthorized access to any systems or
              data, interfere with operation, or introduce malware.
            </li>
            <li>
              You will not attempt to reverse engineer or circumvent
              protections in the Services except as permitted by law.
            </li>
            <li>
              <strong>Messaging/SMS compliance:</strong> If you use the Services
              to communicate with your customers, you are responsible for
              obtaining any required consents and complying with applicable
              laws, regulations, and carrier policies (including opt-in/opt-out
              requirements).
            </li>
          </ul>

          <h2 className="mt-14">4. Customer content &amp; AI output</h2>
          <ul>
            <li>
              <strong>Your Content:</strong> If you use our platform, you may
              upload or connect data such as messages, call logs, voicemails, and
              documents (“Customer Content”). You retain ownership of your
              Customer Content.
            </li>
            <li>
              <strong>License to operate:</strong> You grant HavenStack a limited
              license to host, process, transmit, and display Customer Content
              solely to provide, maintain, and improve the Services.
            </li>
            <li>
              <strong>AI Disclaimer:</strong> The Services may use artificial
              intelligence to generate responses, summaries, or transcriptions.
              AI outputs may be inaccurate or incomplete. You are responsible
              for reviewing AI-generated content before relying on it for
              business, medical, legal, or financial decisions.
            </li>
          </ul>

          <h2 className="mt-14">5. Messaging / SMS program terms</h2>
          <p>
            If you provide your phone number and opt in, you may receive SMS
            messages from HavenStack related to your account and the Services
            (including onboarding, support, or product updates). Message
            frequency may vary. Message and data rates may apply. Consent to
            receive messages is not a condition of purchase.
          </p>

          <div className="bg-slate-50 p-6 border-l-4 border-teal-500 my-6">
            <p className="font-semibold text-slate-900 mb-2 uppercase text-xs tracking-wider">
              Carrier Compliance Disclosure:
            </p>
            <p className="italic text-sm leading-relaxed text-slate-700">
              Mobile information will not be shared with third parties or
              affiliates for marketing or promotional purposes. Text messaging
              originator opt-in data and consent will not be shared with any
              third parties for their own marketing or promotional purposes.
            </p>
          </div>

          <ul>
            <li>
              <strong>Opt-out:</strong> Reply <strong>STOP</strong> to cancel.
            </li>
            <li>
              <strong>Help:</strong> Reply <strong>HELP</strong> for assistance
              or email{" "}
              <a
                href="mailto:support@havenstack.ai"
                className="text-teal-600 underline font-medium"
              >
                support@havenstack.ai
              </a>
              .
            </li>
            <li>Message and data rates may apply. Message frequency varies.</li>
          </ul>

          <h2 className="mt-14">6. Subscriptions and payments</h2>
          <p>
            HavenStack may offer tiered subscription plans. Features available to
            you may depend on your plan. Pricing, features, and availability may
            change over time. If paid plans are introduced or changed, we will
            provide additional details at the time of purchase or within the
            application.
          </p>

          <h2 className="mt-14">7. Termination</h2>
          <p>
            We may suspend or terminate access to the Services if we reasonably
            believe you have violated these Terms or used the Services in a way
            that could cause harm to other users, third parties, or HavenStack.
          </p>

          <h2 className="mt-14">8. Disclaimers &amp; limitation of liability</h2>
          <p className="text-sm uppercase font-semibold text-slate-700">
            The Services are provided “AS IS.”
          </p>
          <p>
            To the maximum extent permitted by law, HavenStack shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, arising from
            your use of (or inability to use) the Services. This includes, for
            example, damages related to AI inaccuracies, missed communications,
            or service interruptions.
          </p>

          <h2 className="mt-14">9. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The “Effective date”
            above indicates when these Terms were last updated. Continued use of
            the Services after changes become effective means you accept the
            updated Terms.
          </p>

          <h2 className="mt-14">10. Contact</h2>
          <p>
            For legal inquiries, please contact:{" "}
            <a
              href="mailto:legal@havenstack.ai"
              className="text-teal-600 underline font-medium"
            >
              legal@havenstack.ai
            </a>
          </p>

          <div className="mt-10 flex gap-4 text-sm">
            <a
              href="/privacy"
              className="text-slate-600 underline underline-offset-4"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <a
            className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors"
            href="/"
          >
            ← Back to HavenStack Home
          </a>
        </div>
      </div>
    </main>
  );
}