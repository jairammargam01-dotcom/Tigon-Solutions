export default function PublicLoading() {
  return (
    <main className="min-h-screen bg-[#0b1220]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl animate-pulse px-6 py-24">
        <div className="mb-8 h-6 w-40 rounded-full bg-white/10" />

        <div className="mb-6 h-16 max-w-3xl rounded-xl bg-white/10" />

        <div className="mb-3 h-5 max-w-2xl rounded bg-white/10" />
        <div className="mb-3 h-5 max-w-xl rounded bg-white/10" />

        <div className="mt-10 flex gap-4">
          <div className="h-12 w-40 rounded-xl bg-[#1056e9]/40" />
          <div className="h-12 w-40 rounded-xl bg-white/10" />
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="h-56 w-full animate-pulse bg-white/10" />

            <div className="space-y-4 p-6">
              <div className="h-6 w-3/4 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
              <div className="mt-6 h-10 w-32 animate-pulse rounded-lg bg-[#1056e9]/40" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}