"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function LandingPage() {
  const features = [
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
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Product Manager",
      feedback:
        "PURITY UI made our dashboard development so much faster and easier!",
      avatar: "/icons/1.svg",
    },
    {
      name: "Mark Thompson",
      role: "Frontend Developer",
      feedback:
        "Clean design and highly responsive components. Highly recommend!",
      avatar: "/icons/2.svg",
    },
    {
      name: "Sophie Lee",
      role: "UI Designer",
      feedback:
        "Beautiful and modern UI. Perfect for SaaS applications and dashboards.",
      avatar: "/icons/3.svg",
    },
  ];

  return (
    <>
      <Head>
        <title>PURITY UI Dashboard | Modern Tailwind Dashboard</title>
        <meta
          name="description"
          content="Build better dashboards faster and smarter with PURITY UI Dashboard. Modern UI, fast development, and scalable architecture."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 relative">
        {/* TOP NAVBAR */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] z-50">
          <div className="flex flex-col lg:flex-row items-center justify-between
                          bg-white/90 backdrop-blur-xl px-6 lg:px-10 py-5 rounded-3xl
                          shadow-lg border border-black/20 gap-4 lg:gap-0">
            <div className="font-bold text-sm tracking-wide text-gray-800">
              PURITY UI DASHBOARD
            </div>

            <div className="flex gap-6 text-sm text-gray-600 flex-wrap justify-center">
              {["DASHBOARD", "PROFILE", "ABOUT", "SIGN IN"].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer hover:text-teal-500 transition"
                >
                  {item}
                </span>
              ))}
            </div>

            <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
              Free Download
            </button>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 pt-40">
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Build Better Dashboards <br />
              <span className="text-teal-500">Faster & Smarter</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              A modern UI dashboard designed to help you manage data, track
              performance, and scale your applications with ease.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 px-6 py-3 rounded-lg hover:border-teal-400 hover:text-teal-500 transition"
              >
                Live Preview
              </motion.button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-[45%] h-80 lg:h-[420px] mb-10 lg:mb-0">
            <div className="absolute -inset-4 rounded-3xl" />
            <Image
              src="/icons/landingpage1.svg"
              alt="Dashboard preview"
              fill
              priority
              className="relative object-cover rounded-3xl"
            />
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="px-6 lg:px-24 mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-teal-50 py-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-teal-200/50 transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="px-6 lg:px-24 mt-24 py-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            What Our Users Say
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{item.feedback}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 px-6 lg:px-24 py-12 mt-24">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="font-bold text-lg text-white">PURITY UI DASHBOARD</div>
            <div className="flex gap-6 flex-wrap justify-center">
              {["Home", "Features", "Testimonials", "About", "Contact"].map(
                (link) => (
                  <span
                    key={link}
                    className="cursor-pointer hover:text-teal-500 transition"
                  >
                    {link}
                  </span>
                )
              )}
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PURITY UI Dashboard. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
