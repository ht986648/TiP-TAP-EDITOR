import RichTextEditor from "@/components/rich-text-editor";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-3xl rounded-xl bg-white shadow-md p-6">
        <RichTextEditor />
      </div>
    </div>
  );
}
