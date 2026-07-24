import { Session } from "next-auth";

interface Props {
  session: Session;
}

export default function UserMenu({
  session,
}: Props) {
  return (
    <div className="text-right">
      <p className="font-semibold text-white">
        {session.user.name}
      </p>

      <p className="text-sm text-slate-400">
        {session.user.role}
      </p>
    </div>
  );
}