import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";
 
import TopStats from "@/components/ui/Dashboard/TopStats";
import InfoSection from "@/components/ui/Dashboard/InfoSection";
import BottomSection from "@/components/ui/Dashboard/BottomSection";
import ProjectsCard from "@/components/ui/Dashboard/ProjectsCard";
import OrdersOverviewCard from "@/components/ui/Dashboard/OrdersOverviewCard";
 
export default function Dashboard() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
 
      <main className="flex-1 bg-gray-100">
        <Navbar />
 
        <div className="p-6 space-y-6">
          <TopStats />
          <InfoSection />
          <BottomSection />
 
          {/* Projects and Orders side by side */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <ProjectsCard />
            </div>
            <div className="col-span-1">
              <OrdersOverviewCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
 