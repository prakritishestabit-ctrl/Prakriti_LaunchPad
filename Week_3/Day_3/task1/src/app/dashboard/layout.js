import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        <main className="p-6">
          {children}
        </main>
      </div>

    </div>
  );
}
