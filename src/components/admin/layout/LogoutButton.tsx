"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/admin/login",
        })
      }
      className="w-full rounded-lg bg-red-600 px-4 py-3 font-medium text-white hover:bg-red-700"
    >
      Logout
    </button>
  );
}