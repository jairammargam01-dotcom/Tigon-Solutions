"use client";

import { useEffect, useState } from "react";

import BrandingCard from "@/components/admin/settings/BrandingCard";
import SiteCard from "@/components/admin/settings/SiteCard";
import AdminCard from "@/components/admin/settings/AdminCard";

import type { Settings } from "@/types/settings";

export default function SettingsPage() {
  const [settings, setSettings] =
    useState<Settings | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "/api/admin/settings"
        );

        const data = await res.json();

        setSettings(data);
      } catch (err) {
        console.error(err);
        alert("Failed to load settings.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  async function saveSettings() {
    if (!settings) return;

    setSaving(true);

    try {
      const res = await fetch(
        "/api/admin/settings",
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(settings),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      alert("Settings saved successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  }

  if (loading || !settings) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        Loading settings...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Settings
          </h1>

          <p className="mt-2 text-slate-400">
            Manage branding, site URL and
            administrator account.
          </p>
        </div>

        <button
          onClick={saveSettings}
          disabled={saving}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {saving
            ? "Saving..."
            : "Save Changes"}
        </button>
      </div>

      <BrandingCard
        value={settings.branding}
        onChange={(branding) =>
          setSettings({
            ...settings,
            branding,
          })
        }
      />

      <SiteCard
        value={settings.site.siteUrl}
        onChange={(siteUrl) =>
          setSettings({
            ...settings,
            site: {
              siteUrl,
            },
          })
        }
      />

      <AdminCard />

    </div>
  );
}