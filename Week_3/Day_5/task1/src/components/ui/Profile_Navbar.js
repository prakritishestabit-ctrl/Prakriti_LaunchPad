"use client";

import Image from "next/image";

export default function TopNavbar() {
  return (
    <div className="w-full  px-4  flex items-center justify-between ">

    
      {/* CENTER: BREADCRUMB */}
      <div className="flex flex-col text-center p-2">
        <p className="text-xs font-bold text-white">
          Pages / <span className="text-white">Profile</span>
        </p>
        <h2 className="flex between pt-2 text-sm font-semibold text-white">
          Profile
        </h2>
      </div>

      {/* RIGHT SIDE */}
            <div className="ml-auto flex items-center gap-4">
              
              {/* SEARCH */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-200 bg-white">
                <Image
                  src="/icons/Icon.svg"
                  alt="Search"
                  width={14}
                  height={14}
                />
                <input
                  type="text"
                  placeholder="Type here..."
                  className="text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent w-40"
                />
              </div>
      
              {/* SIGN IN */}
              <div className="flex items-center gap-1 text-white cursor-pointer">
                <Image
                  src="/icons/white_user.svg"
                  alt="User"
                  width={14}
                  height={14}
                />
                <span className="text-sm font-medium">Sign In</span>
              </div>
      
              {/* SETTINGS */}
              <Image
                src="/icons/white_settings.svg"
                alt="Settings"
                width={14}
                height={14}
                className="cursor-pointer"
              />
      
              {/* NOTIFICATIONS */}
              <Image
                src="/icons/white_bellicon.svg"
                alt="Notifications"
                width={16}
                height={14}
                className="cursor-pointer"
              />
      </div>
    </div>
  );
}
