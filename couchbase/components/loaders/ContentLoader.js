import React from "react";

const ContentLoader = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <CoverLoader />
      <DetailsLoader />
    </div>
  );
};

export default ContentLoader;

const CoverLoader = () => {
  return (
    <div className="flex-shrink-0 h-48 sm:h-56 md:h-64 lg:h-72 relative">
      <div className="w-full animate-pulse h-full">
        <div className="h-full w-full bg-indigo-50/50" />
      </div>

      <div className="absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
        <div className="rounded-full w-32 h-32 animate-pulse bg-indigo-100 border-4 border-white"></div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-3">
        <div className="h-12 w-12 rounded-full bg-indigo-100 animate-pulse" />
        <div className="h-12 w-12 rounded-full bg-indigo-100 animate-pulse" />
      </div>
    </div>
  );
};

const DetailsLoader = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 md:pt-20 lg:pt-16 md:pl-24 animate-pulse">
      <div className="max-w-5xl mx-auto">
        <div className="text-center md:text-left mb-8">
          <div className="h-10 w-3/4 md:w-1/2 bg-indigo-50 rounded mb-3 mx-auto md:mx-0" />
          <div className="h-6 w-2/3 md:w-1/3 bg-indigo-50 rounded mx-auto md:mx-0" />
          <div className="mt-4 h-6 w-1/2 md:w-1/4 bg-indigo-50 rounded mx-auto md:mx-0" />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="h-6 w-40 bg-indigo-50 rounded mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="h-4 w-20 bg-indigo-50 rounded" />
              <div className="h-5 w-40 bg-indigo-50 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-20 bg-indigo-50 rounded" />
              <div className="h-5 w-40 bg-indigo-50 rounded" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <div className="h-4 w-24 bg-indigo-50 rounded" />
              <div className="h-5 w-64 bg-indigo-50 rounded" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <div className="h-4 w-20 bg-indigo-50 rounded" />
              <div className="h-5 w-56 bg-indigo-50 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
