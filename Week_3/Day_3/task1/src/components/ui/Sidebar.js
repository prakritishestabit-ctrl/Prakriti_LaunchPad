import Image from "next/image";
import Link from "next/link";


export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-4 space-y-6">

      {/* LOGO SECTION */}
      <div className="flex items-center gap-3 px-4 py-2">
        <Image
          src="/icons/logo.svg"
          alt="Purity UI Logo"
          width={22}
          height={22}
        />
        <span className="text-xs font-semibold text-gray-800 tracking-wide">
        PURITY UI DASHBOARD
        </span>

      </div>

      {/* DIVIDER */}
      <hr className="my-4 border-gray-200" />


      {/* MAIN NAV */}
      <div className="space-y-2">
        <SidebarItem
          label="Dashboard"
          icon="/icons/default.svg"
          href="/dashboard"
          active
        />

        <SidebarItem label="Tables" icon="/icons/chart.svg" href="/dashboard/tables" />
        <SidebarItem label="Billing" icon="/icons/img3.svg" href="/dashboard/billing" />
        <SidebarItem label="RTL" icon="/icons/img4.svg" href="/dashboard/rtl" />  
      </div>

      {/* ACCOUNT PAGES */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-3 px-4">
          Account Pages
        </p>

        <SidebarItem label="Profile" icon="/icons/img5.svg" href="/dashboard/profile" />
        <SidebarItem label="Sign In" icon="/icons/img6.svg" href="/signin" />
        <SidebarItem label="Sign Up" icon="/icons/sharp.svg" href="/signup" />
      </div>

      {/* DOCUMENTATION IMAGE */}
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
      className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition
      ${active ? "bg-teal-50 shadow-sm" : "hover:bg-gray-100"}`}
    >
      {/* ICON */}
      <div
        className={`w-9 h-9 flex items-center justify-center rounded-full shadow-sm
        ${active ? "bg-teal-500" : "bg-white"}`}
      >
        <Image
          src={icon}
          alt={label}
          width={16}
          height={16}
          className={active ? "brightness-0 invert" : ""}
        />
      </div>

      {/* LABEL */}
      <span
        className={`text-sm font-medium
        ${active ? "text-teal-500" : "text-gray-400"}`}
      >
        {label}
      </span>
    </div>
  );
}
