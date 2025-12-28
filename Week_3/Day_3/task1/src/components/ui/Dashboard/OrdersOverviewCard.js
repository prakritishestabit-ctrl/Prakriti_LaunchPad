import Card from "@/components/ui/Card";
import Image from "next/image";

export default function OrdersOverviewCard() {
  return (
    <Card className="p-0 overflow-hidden">
      <Image
        src="/icons/SecondCard.svg"
        alt="Orders Overview"
        width={600}
        height={420}
        className="w-full h-full object-cover"
      />
    </Card>
  );
}
