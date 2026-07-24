import { Session } from "next-auth";

import UserMenu from "./UserMenu";

interface Props {
  session: Session;
}

export default function Header({
  session,
}: Props) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <h2 className="text-2xl font-semibold text-white">
        Dashboard
      </h2>

      <UserMenu session={session} />
    </header>
  );
}