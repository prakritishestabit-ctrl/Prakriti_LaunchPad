import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white p-4 space-y-6">
      
      <div className="space-y-2">
        <SidebarItem
          label="Dashboard"
          icon="/icons/default.svg"
          active
        />
        <SidebarItem
          label="Tables"
          icon="/icons/chart.svg"
        />
        <SidebarItem
          label="Billing"
          icon="/icons/img3.svg"
        />
        <SidebarItem
          label="RTL"
          icon="/icons/img4.svg"
        />
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-3 px-4">
        Account Pages
        </p>


        <SidebarItem
          label="Profile"
          icon="/icons/img5.svg"
        />
        <SidebarItem
          label="Sign In"
          icon="/icons/img6.svg"
        />
        <SidebarItem
          label="Sign Up"
          icon="/icons/sharp.svg"
        />
      </div>

      {/* Documentation Image */}
      <div className="mt-6 px-4 flex justify-center">
        <Image
          src="/icons/doc.svg" 
          alt="Documentation"
          width={220}        
          height={220}
          className="object-contain"
        />
      </div>
    </aside>
  );
}


function SidebarItem({ label, icon, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer
      ${active ? "bg-teal-50" : "hover:bg-gray-100"}`}
    >
      {/* ICON BACKGROUND */}
      <div
        className={`w-9 h-9 flex items-center justify-center rounded-lg
        ${active ? "bg-teal-400" : "bg-gray-100"}`}
      >
        <Image
          src={icon}
          alt={label}
          width={18}
          height={18}
        />
      </div>

      <span
        className={`text-sm font-medium
        ${active ? "text-gray-800" : "text-gray-500"}`}
      >
        {label}
      </span>
    </div>
  );
}

