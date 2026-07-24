import CareerForm from "@/components/admin/careers/CareerForm";

export const metadata = {
  title: "New Job | Admin",
};

export default function NewCareerPage() {
  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="mb-8 text-3xl font-bold">
        New Job
      </h1>

      <CareerForm />

    </div>
  );
}