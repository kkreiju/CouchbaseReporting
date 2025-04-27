import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-[#05061B] text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Logo and name */}
        <div className="flex items-center">
          <img
            src="/couchbase.png"
            alt="Couchbase Logo"
            className="h-8 w-auto mr-3"
          />
          <span className="text-xl font-bold">CouchBase</span>
        </div>

        {/* Right side - Navigation links */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className={`px-5 py-2 rounded-md ${
              router.pathname === "/"
                ? "bg-blue-900/30 text-blue-300 border border-blue-700"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base">About</span>
            </div>
          </Link>

          <Link
            href="/user"
            className={`px-5 py-2 rounded-md ${
              router.pathname === "/user"
                ? "bg-blue-900/30 text-blue-300 border border-blue-700"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
              <span className="text-base">Student List</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
