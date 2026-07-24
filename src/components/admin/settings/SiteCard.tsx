"use client";

import { Lock, Unlock } from "lucide-react";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SiteCard({
  value,
  onChange,
}: Props) {
  const [locked, setLocked] = useState(true);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Site Configuration
      </h2>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        Site URL
      </label>

      <div className="flex items-center gap-3">
        <input
          type="url"
          value={value}
          readOnly={locked}
          onChange={(e) => onChange(e.target.value)}
          className={`flex-1 rounded-lg border px-4 py-3 text-white outline-none transition ${
            locked
              ? "cursor-not-allowed border-slate-700 bg-slate-950 opacity-80"
              : "border-blue-500 bg-slate-950"
          }`}
        />

        <button
          type="button"
          title={
            locked
              ? "Double-click to unlock"
              : "Lock"
          }
          onDoubleClick={() => setLocked(false)}
          onClick={() => {
            if (!locked) setLocked(true);
          }}
          className="rounded-lg border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-slate-800"
        >
          {locked ? (
            <Lock className="h-5 w-5 text-slate-300" />
          ) : (
            <Unlock className="h-5 w-5 text-blue-500" />
          )}
        </button>
      </div>

      <p className="mt-2 text-sm text-slate-400">
        {locked
          ? "Double-click the lock icon to edit the production site URL."
          : "Site URL unlocked. Remember to save your changes."}
      </p>
    </div>
  );
}