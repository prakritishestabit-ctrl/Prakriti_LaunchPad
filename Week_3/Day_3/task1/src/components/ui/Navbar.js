import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full h-16 flex items-center px-6 ">
      
      {/* LEFT: PAGE INFO */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">Pages / Dashboard</span>
        <span className="text-sm font-semibold text-gray-800">
          Dashboard
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="ml-auto flex items-center gap-4">
        
        {/* SEARCH */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white">
          <Image
            src="/icons/Icon.svg"
            alt="Search"
            width={14}
            height={14}
          />
          <input
            type="text"
            placeholder="Type here..."
            className="text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent w-24"
          />
        </div>

        {/* SIGN IN */}
        <div className="flex items-center gap-1 text-gray-600 cursor-pointer">
          <Image
            src="/icons/img7.svg"
            alt="User"
            width={14}
            height={14}
          />
          <span className="text-sm font-medium">Sign In</span>
        </div>

        {/* SETTINGS */}
        <Image
          src="/icons/Vector.svg"
          alt="Settings"
          width={14}
          height={14}
          className="cursor-pointer"
        />

        {/* NOTIFICATIONS */}
        <Image
          src="/icons/img8.svg"
          alt="Notifications"
          width={14}
          height={14}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}
