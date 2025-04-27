import React from "react";

function getInitials(name) {
  const parts = name.split(" ");
  const initials = parts.map((part) => part.charAt(0).toUpperCase()).join("");
  return initials;
}

function getColor(initials) {
  const colors = [
    { bg: "#6366f1", text: "#ffffff" }, // indigo
    { bg: "#8b5cf6", text: "#ffffff" }, // violet
    { bg: "#ec4899", text: "#ffffff" }, // pink
    { bg: "#06b6d4", text: "#ffffff" }, // cyan
    { bg: "#10b981", text: "#ffffff" }, // emerald
    { bg: "#f59e0b", text: "#ffffff" }, // amber
    { bg: "#14b8a6", text: "#ffffff" }, // teal
    { bg: "#ef4444", text: "#ffffff" }, // red
  ];

  const index =
    Math.abs(
      initials.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    ) % colors.length;

  return colors[index];
}

function Avatar({ name }) {
  const initials = getInitials(name);
  const { bg, text } = getColor(initials);

  return (
    <div
      className="rounded-full w-32 h-32 flex items-center justify-center shadow-lg border-4 border-white"
      style={{
        backgroundColor: bg,
        color: text,
        fontSize: "40px",
        fontWeight: "600",
        textTransform: "uppercase",
      }}
    >
      <span>{initials}</span>
    </div>
  );
}

export default Avatar;
