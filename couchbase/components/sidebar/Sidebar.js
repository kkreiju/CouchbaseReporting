import React, { useEffect } from "react";
import { UserRow } from "../UserRow";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SidebarLoader from "../loaders/SidebarLoader";

export const Sidebar = ({
  selectedProfile,
  setSelectedProfile,
  profiles,
  isLoading,
  setSearchString,
  openCreateModal,
}) => {
  const handleSearchFieldChange = (event) => {
    setSearchString(event.target.value);
  };

  useEffect(() => {
    // if we've just added the first profile, select it
    if (profiles.length === 1) {
      setSelectedProfile(profiles[0]);
    }
  }, [profiles, setSelectedProfile]);

  return (
    <div className="bg-[#0A0C22] border-r border-gray-800 w-full md:w-1/3 lg:w-1/4 max-w-md h-full flex flex-col overflow-hidden shadow-sm">
      <div className="sticky top-0 bg-[#0A0C22] z-10 p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">User Management</h2>
          <button
            onClick={openCreateModal}
            className="text-indigo-400 hover:text-indigo-300 transition-colors p-1 rounded-full hover:bg-indigo-900/20"
            title="Add New User"
          >
            <PlusCircleIcon className="h-8 w-8" />
          </button>
        </div>
        <div className="relative mt-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            onChange={handleSearchFieldChange}
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-lg border border-gray-700 bg-[#0F1128] py-2.5 pl-10 pr-4 text-gray-100 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 transition-all sm:text-sm"
            placeholder="Search users..."
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-800">
          {isLoading ? (
            <SidebarLoader numRecords={25} />
          ) : profiles.length > 0 ? (
            <>
              {profiles.map((profile, idx) => {
                return (
                  <UserRow
                    profile={profile}
                    index={idx}
                    key={idx}
                    setSelectedProfile={setSelectedProfile}
                    isRowSelected={profile.pid === selectedProfile?.pid}
                  />
                );
              })}
            </>
          ) : (
            <div className="p-6 text-center">
              <p className="text-lg text-gray-300">No Results Found</p>
              <p className="text-sm text-gray-500 mt-1">
                Try adjusting your search
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
