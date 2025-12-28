"use client";

import Sidebar from "@/components/ui/Sidebar"; 
import TopNavbar from "@/components/ui/Users/TopNavbar";


function AuthorsTable() {
const authors = [
    { name: "Esthera Jackson", email: "esthera@simmmpale.com", role: "Manager", specialized: "Organization", status: "Online", date: "14/06/21", image: "/icons/1.svg" },
    { name: "Alexa Liras", email: "alexa@simmmpale.com", role: "Programmer", specialized: "Developer", status: "Offline", date: "14/06/21", image: "/icons/2.svg" },
    { name: "Laurent Michael", email: "laurent@simmmpale.com", role: "Executive", specialized: "Projects", status: "Online", date: "14/06/21", image: "/icons/3.svg" },
    { name: "Freduardo Hill", email: "freduardo@simmmpale.com", role: "Manager", specialized: "Organization", status: "Online", date: "14/06/21", image: "/icons/4.svg" },
    { name: "Daniel Thomas", email: "daniel@simmmpale.com", role: "Programmer", specialized: "Developer", status: "Offline", date: "14/06/21", image: "/icons/5.svg" },
    { name: "Mark Wilson", email: "mark@simmmpale.com", role: "Designer", specialized: "UI/UX Design", status: "Offline", date: "14/06/21", image: "/icons/6.svg" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg font-bold mb-4">Authors Table</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-xs pb-2 text-gray-400">AUTHOR</th>
            <th className="text-xs pb-2 text-gray-400">FUNCTION</th>
            <th className="text-xs pb-2 text-gray-400">STATUS</th>
            <th className="text-xs pb-2 text-gray-400">EMPLOYED</th>
            <th className="text-xs pb-2 text-gray-400"></th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, idx) => (
            <tr key={idx} className="border-b border-gray-100">
              <td className="py-3">
                <div className="flex items-center gap-4">
                <img
                    src={author.image}
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                  <div>
                    <p className="font-medium">{author.name}</p>
                    <p className="text-gray-400 text-sm">{author.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-2">
                <p className="font-medium">{author.role}</p>
                <p className="text-xs pb-2 text-gray-400">{author.specialized}</p>
              </td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${
                    author.status === "Online" ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  {author.status}
                </span>
              </td>
              <td className="py-2">{author.date}</td>
              <td className="py-2 text-gray-500 cursor-pointer">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Projects Table Component
function ProjectsTable() {
  const projects = [
    { name: "Chakra Soft UI Version", logo: "/icons/P1.svg", budget: "$14,000", status: "Working", completion: 60 },
    { name: "Add Progress Track", logo: "/icons/P2.svg", budget: "$3,000", status: "Canceled", completion: 10 },
    { name: "Fix Platform Errors", logo: "/icons/P3.svg", budget: "Not set", status: "Done", completion: 100 },
    { name: "Launch our Mobile App", logo: "/icons/p4.svg", budget: "$32,000", status: "Done", completion: 100 },
    { name: "Add the New Pricing Page", logo: "/icons/P5.svg", budget: "$400", status: "Working", completion: 25 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-800">Projects</h2>
        <p className="text-xs text-gray-500 flex items-center gap-1">
        <span className="text-green-500">●</span>
        <span className="font-semibold text-gray-500">30 done</span>
        <span>this month</span>
        </p>
      </div>

      {/* Table Head */}
      <div className="grid grid-cols-12 text-xs text-gray-400 pb-3 border-b border-gray-100">
        <p className="col-span-5">COMPANIES</p>
        <p className="col-span-2">BUDGET</p>
        <p className="col-span-2">STATUS</p>
        <p className="col-span-3">COMPLETION</p>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-100">
        {projects.map((p, i) => (
          <div key={i} className="grid grid-cols-12 items-center py-4 text-sm">
            {/* Company */}
            <div className="col-span-5 flex items-center gap-3">
              <img src={p.logo} className="w-5 h-5" />
              <p className="font-medium text-gray-800">{p.name}</p>
            </div>

            {/* Budget */}
            <p className="col-span-2 font-bold text-gray-600">{p.budget}</p>

            {/* Status */}
            <p className="col-span-2 font-bold text-gray-700">{p.status}</p>

            {/* Completion */}
            <div className="col-span-3">
                {/* Percentage + menu */}
                <div className="flex justify-between items-center mb-1 ">
                    <span className="text-xs font-bold text-teal-400">{p.completion}%</span>
                    <span className="text-gray-400 cursor-pointer">&#8942;</span>
                </div>

                {/* Progress bar */}
                <div className="w-[200px] h-1.25 bg-gray-200 rounded">
                    <div
                    className="h-1.25 bg-teal-400 rounded"
                    style={{ width: `${p.completion}%` }}
                    />
                </div>
                </div>

          </div>
        ))}
      </div>
    </div>
  );
}


// Main Users Page
export default function UsersPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* <Sidebar /> */}

      <div className="flex-1">
        {/* TOP BAR */}
        <TopNavbar />

        {/* PAGE CONTENT */}
        <div className="p-6">
          <AuthorsTable />
          <ProjectsTable />
        </div>
      </div>
    </div>
  );
}
