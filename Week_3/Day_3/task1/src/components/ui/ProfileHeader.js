import UserCard from "./UserCard";
import TopNavbar from "@/components/ui/TopNavbar";

export default function ProfileHeader() {
  return (
    <div className="relative">

      {/* GRADIENT BANNER */}
      <div className="relative h-[260px] rounded-xl overflow-hidden bg-[url('@/../public/icons/profile_banner.svg')]">
         <TopNavbar /> 
      </div>

      {/* OVERLAPPING CARD */}
      <div className="absolute left-6 right-6 bottom-[-48px]">
        <UserCard />
      </div>

    </div>
  );
}
