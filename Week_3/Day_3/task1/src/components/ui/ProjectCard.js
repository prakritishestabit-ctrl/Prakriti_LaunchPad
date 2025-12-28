import Image from "next/image";

export default function ProjectCard({ image, project, title, description }) {
  return (
    <div className="bg-white-100 rounded-xl p-4 space-y-3">
      <Image
        src={image}
        alt={title}
        width={300}
        height={180}
        className="rounded-lg object-cover"
      />

      <p className="text-xs text-gray-400">{project}</p>

      <h3 className="text-sm font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-xs text-gray-400">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2">
        <button className="text-xs px-4 py-1 border border-teal-400 text-teal-500 rounded-full hover:bg-teal-50">
          VIEW ALL
        </button>

        {/* avatars */}
        <div className="flex -space-x-2">
          <img src="/icons/1.svg" className="w-6 h-6 rounded-full border" />
          <img src="/icons/2.svg" className="w-6 h-6 rounded-full border" />
          <img src="/icons/3.svg" className="w-6 h-6 rounded-full border" />
        </div>
      </div>
    </div>
  );
}
