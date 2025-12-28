import Image from "next/image";
import Card from "@/components/ui/Card";

const stats = [
  {
    title: "Today's Money",
    value: "$53,000",
    percent: "+55%",
    positive: true,
    icon: "/icons/Nav1.svg",
  },
  {
    title: "Today's Users",
    value: "2,300",
    percent: "+5%",
    positive: true,
    icon: "/icons/globe.svg",
  },
  {
    title: "New Clients",
    value: "+3,052",
    percent: "-14%",
    positive: false,
    icon: "/icons/Nav3.svg",
  },
  {
    title: "Total Sales",
    value: "$173,000",
    percent: "+8%",
    positive: true,
    icon: "/icons/Nav4.svg",
  },
];

export default function TopStats() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <Card key={i} className="h-[80px]">
          <div className="h-full flex items-center justify-between px-5">
            <div>
              <p className="text-xs text-gray-400 mb-1">{item.title}</p>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-800">
                  {item.value}
                </p>
                <span
                  className={`text-xs font-semibold ${
                    item.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.percent}
                </span>
              </div>
            </div>

            <div className="w-10 h-10 rounded-lg bg-teal-400 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={16}
                height={16}
                className="brightness-0 invert"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
