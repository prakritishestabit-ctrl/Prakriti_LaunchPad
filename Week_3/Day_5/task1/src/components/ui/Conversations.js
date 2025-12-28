"use client";
import Image from "next/image";

const conversations = [
  {
    name: "Esthera Jackson",
    message: "Hi! I need more informations...",
    icon: "/icons/1.svg",
  },
  {
    name: "Esthera Jackson",
    message: "Awesome work, can you change...",
    icon: "/icons/6.svg",
  },
  {
    name: "Esthera Jackson",
    message: "Have a great afternoon...",
    icon: "/icons/3.svg",
  },
  {
    name: "Esthera Jackson",
    message: "About files I can...",
    icon: "/icons/4.svg",
  },
];

export default function Conversations() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-5">
      <h2 className="text-lg font-semibold">Conversations</h2>

      <div className="space-y-4">
        {conversations.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between"
          >
            {/* Left: Icon + text */}
            <div className="flex items-start gap-3">
              <Image
                src={item.icon}
                alt={item.name}
                width={36}
                height={36}
                className="rounded-lg"
              />

              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.message}
                </p>
              </div>
            </div>

            {/* Right: Reply */}
            <button className="text-xs font-semibold text-teal-500 hover:underline">
              REPLY
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
