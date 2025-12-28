import PlatformSettings from "./PlatformSettings";
import ProfileInformation from "./ProfileInformation";
import Conversations from "./Conversations";

export default function ProfileInfoGrid() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <PlatformSettings />
      <ProfileInformation />
      <Conversations />
    </div>
  );
}
