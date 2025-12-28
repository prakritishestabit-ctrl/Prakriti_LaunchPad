import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex">

      {/*TOP NAVBAR */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] z-50">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-md">

          <div className="font-semibold text-sm">PURITY UI DASHBOARD</div>

          <div className="flex items-center gap-8 text-sm text-gray-600">
            <span className="cursor-pointer"> DASHBOARD</span>
            <span className="cursor-pointer"> PROFILE</span>
            <span className="cursor-pointer"> SIGN UP</span>
            <span className="cursor-pointer"> SIGN IN</span>
          </div>

          <button className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full">
            Free Download
          </button>

        </div>
      </div>

      {/* LEFT SECTION */}
      <div className="w-1/2 flex flex-col justify-center px-24">

        {/* ABOUT CONTENT */}
        <div className="max-w-md text-justify">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">About Us</h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our platform is designed to help users manage their work, track performance,
            and stay organized through a clean and intuitive dashboard experience. We
            focus on simplicity, speed, and scalability—making it easy for individuals
            and teams to monitor progress, analyze data, and make better decisions.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Built using modern technologies and thoughtful UI principles, this dashboard
            adapts seamlessly across devices while maintaining a consistent and elegant
            design.
          </p>
        </div>

        {/* FOOTER */}
        {/* <p className="absolute bottom-6 left-12 text-xs text-gray-400">
          © 2021, Made with ❤️ by Creative Tim & Simmmple
        </p> */}

      </div>

      {/*\RIGHT SECTION */}
      <div className="w-1/2 relative p-8">
        <Image
          src="/icons/aboutchakra.svg"
          alt="About background"
          fill
          priority
          className="object-cover rounded-l-3xl"
        />
      </div>

    </div>
  );
}

