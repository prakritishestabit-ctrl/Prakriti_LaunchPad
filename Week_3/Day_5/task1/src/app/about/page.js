"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-16 py-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-10">
            About <span className="text-teal-500">Purity UI Dashboard</span>
          </h1>

          <p className="text-gray-600 leading-relaxed mb-8">
            Purity UI Dashboard is a modern, responsive admin dashboard designed
            to help teams manage data, track performance, and make smarter
            decisions with ease.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Built with scalability and simplicity in mind, it provides a clean
            user experience across all devices while maintaining high
            performance and elegant design.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/icons/aboutchakra.svg" 
            alt="About Dashboard"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-teal-500/80 flex items-center justify-center">
            {/* <h2 className="text-white text-4xl font-bold">chakra</h2> */}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 lg:px-16 py-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow p-10">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600 mb-4">
              
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Fast Performance
            </h3>
            <p className="text-sm text-gray-600">
              Optimized components ensure smooth navigation and fast load times.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow p-10">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600 mb-4">
              
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Data Driven
            </h3>
            <p className="text-sm text-gray-600">
              Track insights, monitor KPIs, and analyze results efficiently.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow p-10">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600 mb-4">
              
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Clean UI
            </h3>
            <p className="text-sm text-gray-600">
              Minimal, elegant design inspired by modern UI principles.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="px-6 lg:px-16 py-10">
        <div className="bg-white rounded-2xl shadow grid grid-cols-1 md:grid-cols-3 text-center py-10">
          <div>
            <p className="text-2xl font-bold text-teal-500">10K+</p>
            <p className="text-sm text-gray-500">Active Users</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-500">99.9%</p>
            <p className="text-sm text-gray-500">Uptime</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-500">24/7</p>
            <p className="text-sm text-gray-500">Support</p>
          </div>
        </div>
      </section>

    </div>
  );
}

