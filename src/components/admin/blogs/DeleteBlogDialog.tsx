"use client";

interface DeleteBlogDialogProps {
  open: boolean;
  blogTitle: string;
  loading?: boolean;
  onCancel(): void;
  onConfirm(): void;
}

export default function DeleteBlogDialog({
  open,
  blogTitle,
  loading = false,
  onCancel,
  onConfirm,
}: DeleteBlogDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

        <div className="border-b border-slate-700 p-6">

          <h2 className="text-xl font-semibold text-white">
            Delete Blog
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Are you sure you want to delete
          </p>

          <p className="mt-2 font-medium text-white">
            &ldquo;{blogTitle}&rdquo;
          </p>

          <p className="mt-4 text-sm text-red-400">
            This action cannot be undone.
          </p>

        </div>

        <div className="flex justify-end gap-3 p-6">

          <button
            onClick={onCancel}
            disabled={loading}
            className="rounded-lg border border-slate-600 px-5 py-2 text-white hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading
              ? "Deleting..."
              : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}