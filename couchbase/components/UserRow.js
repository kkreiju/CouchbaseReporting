import React from "react";

export const UserRow = ({
  profile,
  index,
  setSelectedProfile,
  isRowSelected,
}) => {
  // Get initials for avatar
  const getInitials = (name) => {
    const names = name.split(" ");
    return names.map((n) => n.charAt(0)).join("");
  };

  // Generate a consistent color based on name
  const getColor = (name) => {
    const colors = [
      "bg-indigo-900 text-indigo-300",
      "bg-emerald-900 text-emerald-300",
      "bg-violet-900 text-violet-300",
      "bg-rose-900 text-rose-300",
      "bg-amber-900 text-amber-300",
      "bg-sky-900 text-sky-300",
      "bg-teal-900 text-teal-300",
      "bg-fuchsia-900 text-fuchsia-300",
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  };

  const initials = getInitials(`${profile.firstName} ${profile.lastName}`);
  const avatarColors = getColor(initials);

  return (
    <div
      className={`hover:bg-[#0F1128] transition-colors ${
        isRowSelected ? "bg-[#0F1128] border-l-4 border-l-indigo-500" : ""
      }`}
      onClick={() => setSelectedProfile(profile)}
    >
      <div className="flex items-center px-4 py-3 cursor-pointer">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${avatarColors} shadow-sm`}
        >
          <span className="font-medium text-sm">{initials}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-200 truncate">
            {profile.firstName} {profile.lastName}
          </h4>
          <p className="text-xs text-gray-400 truncate">{profile.email}</p>
          <p className="text-xs text-gray-500 truncate font-mono mt-1">
            {profile.pid.substring(0, 16)}...
          </p>
        </div>
      </div>
    </div>
  );
};
