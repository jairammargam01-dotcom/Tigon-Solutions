"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Something went wrong
      </h1>

      <p className="mb-6 text-slate-400">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        Try Again
      </button>
    </div>
  );
}