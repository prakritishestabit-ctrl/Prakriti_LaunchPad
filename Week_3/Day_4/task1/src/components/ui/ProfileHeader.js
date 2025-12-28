import UserCard from "./UserCard";
import Navbar from "@/components/ui/Navbar";

export default function ProfileHeader() {
  return (
    <div className="relative">

      {/* GRADIENT BANNER */}
      <div className="relative h-[260px] rounded-xl overflow-hidden bg-[url('@/../public/icons/profile_banner.svg')]">
        <Navbar />
      </div>

      {/* OVERLAPPING CARD */}
      <div className="absolute left-6 right-6 bottom-[-48px]">
        <UserCard />
      </div>

    </div>
  );
}
