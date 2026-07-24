"use client";

import ConfirmDialog from "@/components/admin/common/ConfirmDialog";

interface DeleteCareerDialogProps {
  open: boolean;
  jobTitle: string;
  loading: boolean;
  onCancel(): void;
  onConfirm(): void;
}

export default function DeleteCareerDialog({
  open,
  jobTitle,
  loading,
  onCancel,
  onConfirm,
}: DeleteCareerDialogProps) {
  return (
    <ConfirmDialog
      open={open}
      title="Delete Job"
      description={`Are you sure you want to delete "${jobTitle}"? This action cannot be undone.`}
      confirmText={loading ? "Deleting..." : "Delete"}
      cancelText="Cancel"
      loading={loading}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
}