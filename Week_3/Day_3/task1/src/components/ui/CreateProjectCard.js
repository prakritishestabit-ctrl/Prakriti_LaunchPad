import { Plus } from "lucide-react";

export default function CreateProjectCard() {
  return (
    <div className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center p-6 text-gray-400 hover:border-teal-400 hover:text-teal-500 cursor-pointer transition">
      <Plus size={28} />
      <p className="text-sm mt-2">Create a New Project</p>
    </div>
  );
}
