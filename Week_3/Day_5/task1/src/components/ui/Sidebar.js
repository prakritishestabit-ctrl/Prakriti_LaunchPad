"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-4 space-y-6">

      {/* Logo Section */}
      <div className="flex items-center gap-3 px-4 py-2">
        <Image src="/icons/logo.svg" alt="Purity UI Logo" width={22} height={22} />
        <span className="text-sm font-semibold text-gray-800">
          PURITY UI DASHBOARD
        </span>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Main Nav */}
      <div className="space-y-2">
        <SidebarItem
          label="Dashboard"
          icon="/icons/default.svg"
          href="/dashboard"
          active={pathname === "/dashboard"}
        />
        <SidebarItem
          label="Tables"
          icon="/icons/chart.svg"
          href="/dashboard/users"
          active={pathname === "/dashboard/users"}
        />
        <SidebarItem
          label="Billing"
          icon="/icons/img3.svg"
          href="/dashboard/billing"
          active={pathname === "/dashboard/billing"}
        />
        <SidebarItem
          label="RTL"
          icon="/icons/img4.svg"
          href="/dashboard/rtl"
          active={pathname === "/dashboard/rtl"}
        />
      </div>

      {/* account pages */}
      <div>
        <p className="text-sm font-semibold uppercase mt-6 mb-3 px-4">
          Account Pages
        </p>

        <SidebarItem
          label="Profile"
          icon="/icons/img5.svg"
          href="/dashboard/profile"
          active={pathname === "/dashboard/profile"}
        />
        <SidebarItem
          label="Sign In"
          icon="/icons/img6.svg"
          href="/signin"
          active={pathname === "/signin"}
        />
        <SidebarItem
          label="Sign Up"
          icon="/icons/sharp.svg"
          href="/signup"
          active={pathname === "/signup"}
        />
      </div>

      {/* Documentation */}
      <div className="mt-6 flex justify-end">
        <Image src="/icons/doc.svg" alt="Documentation" width={220} height={220} />
      </div>
    </aside>
  );
}

function SidebarItem({ label, icon, href, active }) {
  return (
    <Link href={href} className="block">
      <div
        className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition
        ${active ? "bg-white shadow-xs" : "hover:bg-gray-100"}`}
      >
        <div
          className={`w-9 h-9 flex items-center justify-center rounded-full
          ${active ? "bg-teal-400" : "bg-white"}`}
        >
          <Image
            src={icon}
            alt={label}
            width={16}
            height={16}
            className={active ? "brightness-0 invert" : ""}
          />
        </div>

        <span
          className={`text-sm font-medium
          ${active ? "text-black" : "text-gray-400"}`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}
