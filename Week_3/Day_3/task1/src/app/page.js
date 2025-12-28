import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">

      {/* TOP NAVBAR */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] z-50">
        <div
          className="flex items-center justify-between
                     bg-white/90 backdrop-blur-xl
                     px-10 py-5 rounded-3xl
                     shadow-lg shadow-teal-100/40
                     border border-black/20"
        >
          <div className="font-bold text-sm tracking-wide text-gray-800">
            PURITY UI DASHBOARD
          </div>

          <div className="flex gap-8 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-teal-500 transition">
              DASHBOARD
            </span>
            <span className="cursor-pointer hover:text-teal-500 transition">
              PROFILE
            </span>
            <span className="cursor-pointer hover:text-teal-500 transition">
              ABOUT
            </span>
            <span className="cursor-pointer hover:text-teal-500 transition">
              SIGN IN
            </span>
          </div>

          <button
            className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm
                       hover:bg-gray-800 transition"
          >
            Free Download
          </button>
        </div>
      </div>

      {/*HERO SECTION*/}
      <section className="flex items-center justify-between px-24 pt-40">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Build Better Dashboards <br />
            <span className="text-teal-500">Faster & Smarter</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            A modern UI dashboard designed to help you manage data, track
            performance, and scale your applications with ease.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              className="bg-teal-500 text-white px-6 py-3 rounded-lg
                         hover:bg-teal-600 transition"
            >
              Get Started
            </button>
            <button
              className="border border-gray-300 px-6 py-3 rounded-lg
                         hover:border-teal-400 hover:text-teal-500 transition"
            >
              Live Preview
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE WITH TEAL GLOW */}
        <div className="relative w-[45%] h-[420px]">
          <div className="absolute -inset-4 rounded-3xl bg-teal-100/30 blur-3xl" />
          <Image
            src="/icons/landingpage1.svg"
            alt="Dashboard preview"
            fill
            priority
            className="relative object-cover rounded-3xl"
          />
        </div>
      </section>

      {/*FEATURES SECTION*/}
      <section className="px-24 mt-24 grid grid-cols-3 gap-8 bg-teal-50 py-12">
        {[
          {
            title: "Modern UI",
            desc: "Clean, responsive and professional design system.",
          },
          {
            title: "Fast Development",
            desc: "Reusable components built with Tailwind & Next.js.",
          },
          {
            title: "Scalable Architecture",
            desc: "Built to grow with your product and your users.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-xl
                       border border-teal-300/70
                       shadow-md hover:shadow-lg
                       hover:shadow-teal-200/50
                       transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
