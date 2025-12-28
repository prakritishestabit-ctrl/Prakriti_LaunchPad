import Image from "next/image";
import Card from "@/components/ui/Card";

export default function BottomSection() {
  return (
    <div className="grid grid-cols-3 gap-6">
      
      {/* ACTIVE USERS */}
      <Card className="h-[300px]">
        <div className="h-full p-5 pt-8 flex flex-col">
          <div className="h-32 flex items-center justify-center mb-6">
            <Image src="/icons/Graph.svg" alt="Graph" width={600} height={300} />
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold">Active Users</h4>
            <p className="text-xs text-green-500">(+23) than last week</p>
          </div>

          <div className="grid grid-cols-4 gap-3 mt-auto text-xs">
            {[
              { label: "Users", value: "32,984" },
              { label: "Clicks", value: "2.42m" },
              { label: "Sales", value: "2,400$" },
              { label: "Items", value: "320" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-100 rounded-lg py-2 text-center"
              >
                <p className="text-gray-400">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* SALES OVERVIEW */}
      <Card className="col-span-2 h-[300px]">
        <div className="h-full p-5">
          <h4 className="text-sm font-semibold mb-2">Sales overview</h4>
          <p className="text-xs text-green-500 mb-3">(+5) more in 2021</p>

          <div className="h-[210px] rounded-lg overflow-hidden">
            <Image
              src="/icons/Graph (1).svg"
              alt="Sales"
              width={900}
              height={210}
              className="object-cover"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
