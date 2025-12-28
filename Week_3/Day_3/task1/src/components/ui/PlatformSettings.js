"use client";
import { useState } from "react";

export default function PlatformSettingsCard() {
  const [account, setAccount] = useState({
    follow: true,
    answers: false,
    mentions: true,
  });

  const [application, setApplication] = useState({
    newProjects: false,
    productUpdates: true,
    newsletter: true,
  });

  const handleToggle = (type, key) => {
    if (type === "account") {
      setAccount(prev => ({ ...prev, [key]: !prev[key] }));
    } else {
      setApplication(prev => ({ ...prev, [key]: !prev[key] }));
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-5">
      <h2 className="text-lg font-semibold">Platform Settings</h2>

      {/* Account Section */}
      <div>
        <h3 className="text-xs text-gray-400 mb-5">ACCOUNT</h3>

        <div className="space-y-4">
          <Toggle
            label="Email me when someone follows me"
            enabled={account.follow}
            onClick={() => handleToggle("account", "follow")}
          />
          <Toggle
            label="Email me when someone answers on my post"
            enabled={account.answers}
            onClick={() => handleToggle("account", "answers")}
          />
          <Toggle
            label="Email me when someone mentions me"
            enabled={account.mentions}
            onClick={() => handleToggle("account", "mentions")}
          />
        </div>
      </div>

      {/* Application Section */}
      <div>
        <h3 className="text-xs text-gray-400 mb-5">APPLICATION</h3>
        <div className="space-y-4">
          <Toggle
            label="New launches and projects"
            enabled={application.newProjects}
            onClick={() => handleToggle("application", "newProjects")}
          />
          <Toggle
            label="Monthly product updates"
            enabled={application.productUpdates}
            onClick={() => handleToggle("application", "productUpdates")}
          />
          <Toggle
            label="Subscribe to newsletter"
            enabled={application.newsletter}
            onClick={() => handleToggle("application", "newsletter")}
          />
        </div>
      </div>
    </div>
  );
}

// Toggle switch component
function Toggle({ label, enabled, onClick }) {
  return (
    <div className="flex items-center justify-start space-x-4 cursor-pointer">
      {/* Toggle Button on the left */}
      <button
        onClick={onClick}
        className={`w-8 h-4 flex items-center rounded-full p-0.5 transition-colors duration-300 ${
          enabled ? "bg-teal-400" : "bg-gray-300"
        }`}
      >
        <span
          className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? "translate-x-4" : "translate-x-0"
          }`}
        ></span>
      </button>

      {/* Label on the right */}
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}

