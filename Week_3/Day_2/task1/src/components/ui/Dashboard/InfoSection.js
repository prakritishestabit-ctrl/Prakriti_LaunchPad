import Image from "next/image";
import Card from "@/components/ui/Card";

export default function InfoSection() {
  return (
    <div className="flex gap-6">
      
      {/* PURITY UI */}
      <Card className="w-[922px] h-[290px]">
        <div className="h-full flex items-center px-8">
          <div className="flex-1">
            <p className="text-xs text-gray-400 mb-2">Built by developers</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Purity UI Dashboard
            </h3>
            <p className="text-sm text-gray-500 max-w-md mb-4">
              From colors, cards, typography to complex elements,
              you will find the full documentation.
            </p>
            <span className="text-sm font-semibold cursor-pointer">
              Read more →
            </span>
          </div>

          <div className="w-[360px] h-[210px] bg-teal-400 rounded-xl flex items-center justify-center">
            <img src="/icons/chakra.svg" alt="chakra" />
          </div>
        </div>
      </Card>

      {/* ROCKETS */}
      <Card className="w-[600px] h-[290px]">
        <div className="h-full p-4">
          <div className="relative h-full rounded-xl overflow-hidden">
            <Image
              src="/icons/rockets.svg"
              alt="Rockets"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 h-full px-6 py-6 flex flex-col justify-end text-white">
              <h4 className="text-lg font-semibold mb-2">
                Work with the Rockets
              </h4>
              <p className="text-sm text-gray-200 mb-3">
                Wealth creation is an evolutionarily recent positive-sum game.
              </p>
              <span className="text-sm font-semibold cursor-pointer">
                Read more →
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
