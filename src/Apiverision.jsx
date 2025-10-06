import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Apiverision() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className=" top-0 bg-gradient-to-r from-gray-950 to-black shadow-2xl p-4 sm:p-6 mb-10 z-10 flex items-center justify-between border-b border-gray-700">
        <h1 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg tracking-tight truncate font-prata">
          a database of Theo's favorite movies, stored in various ways{" "}
          <span className=" text-purple-400">api</span>
        </h1>
        <div className="flex space-x-3 flex-shrink-0 justify-end">
          <Link
  to="/"
  className="px-3 py-1 text-sm sm:px-4 sm:py-2 font-prata rounded-lg bg-transparent text-green-400 transition shadow-md whitespace-nowrap hover:bg-white/10"
>json
  
</Link>
          <button className="px-3 py-1 text-sm sm:px-4 sm:py-2 rounded-lg bg-transparent b text-red-300 font-prata transition shadow-md whitespace-nowrap hidden sm:inline-block hover:bg-white/10">
            Database
          </button>
        </div>
      </header>
      
    </div>
  );
}
export default Apiverision;