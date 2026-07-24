interface Props {
  status: string;
}

export default function LeadStatusBadge({
  status,
}: Props) {
  const colors = {
    pending:
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

    emailed:
      "bg-green-500/10 text-green-400 border-green-500/20",

    failed:
      "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${
        colors[status as keyof typeof colors] ??
        "bg-slate-700 text-white"
      }`}
    >
      {status}
    </span>
  );
}