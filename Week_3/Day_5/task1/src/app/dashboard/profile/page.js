import ProfileHeader from "@/components/ui/ProfileHeader";
import ProfileInfoGrid from "@/components/ui/ProfileInfoGrid";
import ProjectsSection from "@/components/ui/ProjectSection";

export default function ProfilePage() {
  return (
    <div className="space-y-6 p-6">
      <ProfileHeader />

      <div className="mt-16">
      <ProfileInfoGrid />

      <div className="mt-8">
      <ProjectsSection />
      </div>
    </div>
    </div>
  );
}
