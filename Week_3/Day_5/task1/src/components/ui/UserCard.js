import Image from "next/image";
import Card from "@/components/ui/Card";

export default function UserCard() {
  return (
    <Card className="flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-md shadow-lg rounded-xl">

      {/* USER INFO */}
      <div className="flex items-center gap-4">
        <Image
          src="/icons/profile_user.svg"
          alt="User"
          width={56}
          height={56}
          className="rounded-lg"
        />

        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Esthera Jackson
          </h3>
          <p className="text-xs text-gray-400">
            esthera@simmmple.com
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-2 text-xs font-semibold">
        <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-800">Overview</span>
        <span className="px-3 py-1 text-gray-500">Teams</span>
        <span className="px-3 py-1 text-gray-500">Projects</span>
      </div>

    </Card>
  );
}
