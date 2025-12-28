"use client";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function ProfileInformation() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-6">
      <h2 className="text-lg font-semibold">Profile Information</h2>

      {/* Bio Section */}
      <div className="space-y-2 text-xs text-gray-400">
        <p>Hi, I’m Alec Thompson.Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
        </p>
      </div>

      {/* Personal Details */}
      <div className="space-y-2 text-sm">
        <div className="flex gap-2 items-center">
          <span className="font-semibold text-gray-500">Full Name:</span>
          <span className="text-gray-400">Alec M. Thompson</span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="font-semibold text-gray-500">Mobile:</span>
          <span className="text-gray-400">(44) 123 1234 123</span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="font-semibold text-gray-500">Email:</span>
          <span className="text-gray-400">alecthompson@mail.com</span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="font-semibold text-gray-500">Location:</span>
          <span className="text-gray-400">United States</span>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="space-y-2 text-sm">
        <span className="font-semibold text-gray-500">Social Media:</span>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-gray-400 hover:text-teal-500 transition-colors"
          >
            <FaTwitter size={16} />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-teal-500 transition-colors"
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-teal-500 transition-colors"
          >
            <FaFacebookF size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
