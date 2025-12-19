import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-white flex items-center px-6 gap-3">
      
      {/* LOGO ICON */}
      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={18}
          height={18}
        />
      </div>

      {/* LOGO TEXT */}
      <h1 className="text-sm font-semibold text-gray-700">
        PURITY UI DASHBOARD
      </h1>

      {/* RIGHT SIDE */}
      <span className="ml-auto text-xs text-gray-400">
        Pages / Tables
      </span>

       <div className="flex items-center">
        <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-gray-200 bg-white mr-[18px]">
            <img src="./icons/Icon.svg" alt="" />

            <input type="text" placeholder="Type here..."
            className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
        </div>

        <div className="flex mr-[19px]">
            <img className="h-[12px] w-[12px] mr-[4px]" src="./icons/img7.svg" alt="" />
            <span className="text-xs font-bold">Sign In</span>
        </div>

        <img className="h-[12px] w-[12px] mr-[17px]" src="./icons/Vector.svg" alt="" />
        
        <img className="h-[12px] w-[12px]" src="./icons/img8.svg" alt="" />
      </div>
    </header>
  );
}
