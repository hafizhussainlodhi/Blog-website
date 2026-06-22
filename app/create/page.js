import CreateBlogForm from "@/components/CreateBlogForm";

export default function CreatePage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold text-center mb-6">Create New Blog</h1>
      <CreateBlogForm />
    </main>
  );
}