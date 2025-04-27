import React from "react";

const SidebarLoader = ({ numRecords }) => {
  let rows = [];
  for (let i = 0; i < numRecords; i++) {
    rows.push(<LoaderRow key={i} />);
  }

  return <div className="divide-y divide-gray-50">{rows}</div>;
};

export default SidebarLoader;

const LoaderRow = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-indigo-100 mr-3"></div>
        <div className="flex-1">
          <div className="h-4 w-24 bg-indigo-50 rounded mb-2"></div>
          <div className="h-3 w-32 bg-indigo-50 rounded mb-1"></div>
          <div className="h-3 w-16 bg-indigo-50 rounded"></div>
        </div>
      </div>
    </div>
  );
};
