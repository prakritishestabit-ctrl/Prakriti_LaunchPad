import Image from "next/image";
import Card from "@/components/ui/Card";

const projects = [
  {
    company: "Chakra Soft UI Version",
    logo: "/icons/P1.svg",
    members: 4,
    budget: "$14,000",
    completion: 60,
  },
  {
    company: "Add Progress Track",
    logo: "/icons/P2.svg",
    members: 2,
    budget: "$3,000",
    completion: 10,
  },
  {
    company: "Fix Platform Errors",
    logo: "/icons/P3.svg",
    members: 2,
    budget: "Not set",
    completion: 100,
  },
  {
    company: "Launch our Mobile App",
    logo: "/icons/p4.svg",
    members: 4,
    budget: "$32,000",
    completion: 100,
  },
  {
    company: "Add the New Pricing Page",
    logo: "/icons/P5.svg",
    members: 3,
    budget: "$400",
    completion: 25,
  },
  {
    company: "Redesign New Online Shop",
    logo: "/icons/P6.svg",
    members: 2,
    budget: "$7,600",
    completion: 40,
  },
];
const memberIcons = [
  "/icons/1.svg",
  "/icons/2.svg",
  "/icons/3.svg",
  "/icons/4.svg",
];

export default function Projects() {
  return (
    <Card className="h-full min-h-[430px]">
      <div className="h-full flex flex-col p-5">

        {/* HEADER */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800">
            Projects
          </h4>
          <p className="text-xs text-green-500">
            30 done this month
          </p>
        </div>

        {/* TABLE HEADER */}
        <div className="grid grid-cols-12 text-xs text-gray-400 pb-3 border-b border-gray-100">
          <p className="col-span-5">Companies</p>
          <p className="col-span-3">Members</p>
          <p className="col-span-2">Budget</p>
          <p className="col-span-2">Completion</p>
        </div>

        {/* TABLE BODY */}
        <div className="flex-1 divide-y divide-gray-100">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-12 items-center py-3 text-sm"
            >
              {/* COMPANY */}
              <div className="col-span-5 flex items-center gap-3">
                <Image
                  src={project.logo}
                  alt={project.company}
                  width={20}
                  height={20}
                />
                <p className="font-medium text-gray-800">
                  {project.company}
                </p>
              </div>

              {/* MEMBERS */}
            <div className="col-span-3 flex -space-x-2">
            {memberIcons.slice(0, project.members).map((icon, i) => (
                <div
                key={i}
                className="w-6 h-6 rounded-full border border-gray-100 bg-white overflow-hidden"
                >
                <Image
                    src={icon}
                    alt="member"
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                />
                </div>
            ))}
            </div>



              {/* BUDGET */}
              <p className="col-span-2 text-gray-600">
                {project.budget}
              </p>

              {/* COMPLETION */}
              <div className="col-span-2">
                <p className="text-xs mb-1">
                  {project.completion}%
                </p>
                <div className="w-full h-1 bg-gray-100 rounded">
                  <div
                    className="h-1 bg-teal-400 rounded"
                    style={{ width: `${project.completion}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Card>
  );
}
