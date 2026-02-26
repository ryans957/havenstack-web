export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-medium tracking-wide text-slate-500">
            HavenStack
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Your Front Desk, Reinvented.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
          We are your trusted safe HAVEN for your STACK of tools that can help you save 
          time and money so you can focus on the more important things that grow your business.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-sm font-medium text-slate-700">
            Coming soon — join early access
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:ryan@havenstack.ai?subject=HavenStack%20Early%20Access&body=Hi%20Ryan%2C%20please%20add%20me%20to%20the%20HavenStack%20early%20access%20list.%0A%0ABusiness%20type%3A%20%0APhone%3A%20%0A"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Join Early Access
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              See how it works (soon)
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Built for service-based SMBs: veterinary, dental, med spa,
            chiropractic (more coming).
          </p>
        </div>

        <footer className="mt-12 text-sm text-slate-500">
          Contact:{" "}
          <a className="underline" href="mailto:ryan@havenstack.ai">
            ryan@havenstack.ai
          </a>
        </footer>
      </div>
    </main>
  );
}