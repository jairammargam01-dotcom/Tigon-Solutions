interface Props {
  published: boolean;
}

export default function PublishBadge({
  published,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        published
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}