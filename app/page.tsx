export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <h1 className="hs-hero-title font-semibold text-slate-900">
            HavenStack
          </h1>

          <p className="mt-4 text-2xl font-medium tracking-tight text-slate-600 sm:text-3xl">
            Your Front Desk, Reinvented.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We are your trusted safe HAVEN for your STACK of tools helping
            you save time and money so you can focus on the more important things
            that grow your business.
          </p>
        </div>

        {/* CTA Card */}
        <div className="rounded-2xl border border-slate-200 p-8 text-center bg-slate-50/50">
          <p className="text-sm font-medium text-slate-700">
            Coming soon — join early access
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:ryan@havenstack.ai?subject=HavenStack%20Early%20Access&body=Hi%20Ryan%2C%20please%20add%20me%20to%20the%20HavenStack%20early%20access%20list.%0A%0ABusiness%20type%3A%20%0APhone%3A%20%0A"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              Join Early Access
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              See how it works (soon)
            </a>
          </div>

          {/* SMS Disclosure for Twilio A2P Approval */}
          <div className="mt-6 max-w-md mx-auto">
            <p className="text-[10px] leading-relaxed text-slate-500 uppercase tracking-wider font-semibold mb-1">
              SMS Disclosure
            </p>
            <p className="text-[11px] leading-relaxed text-slate-400">
              By requesting early access via email/phone, you agree to receive text messages from HavenStack for 
              account updates and support. Message and data rates may apply. Message frequency varies. 
              Reply STOP to opt out, HELP for help. See our{" "}
              <a href="/privacy" className="underline hover:text-teal-600">Privacy Policy</a> and <a href="/terms" className="underline hover:text-teal-600">Terms</a>.
            </p>
          </div>

          <p className="mt-6 text-xs text-slate-500 border-t border-slate-200 pt-4">
            Built for service-based SMBs: veterinary, dental, med spa,
            chiropractic (more coming).
          </p>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center text-sm text-slate-500">
          Contact:{" "}
          <a className="underline hover:text-teal-600 transition-colors" href="mailto:ryan@havenstack.ai">
            ryan@havenstack.ai
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} HavenStack. All rights reserved.</p>
          <div className="mt-3 flex justify-center gap-4">
            <a className="underline hover:text-teal-600 transition-colors" href="/privacy">
              Privacy Policy
            </a>
            <a className="underline hover:text-teal-600 transition-colors" href="/terms">
              Terms of Service
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}