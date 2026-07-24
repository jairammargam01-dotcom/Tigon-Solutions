import BlogForm from "@/components/admin/blogs/BlogForm";

export const metadata = {
  title: "New Blog | Admin",
};

export default function NewBlogPage() {
  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="mb-8 text-3xl font-bold">
        New Blog
      </h1>

      <BlogForm />

    </div>
  );
}