import React from "react";
import { Link } from "react-router-dom";

const CareerHub = () => {
  return (
    <div className="min-h-screen bg-[#020712] text-white flex items-center justify-center px-6">

      <div className="relative w-full max-w-4xl min-h-[500px] flex flex-col items-center justify-center text-center rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-[#0b1222] via-[#071321] to-[#061b2a] overflow-hidden">

        {/* Glow */}
        <div className="absolute w-80 h-80 bg-cyan-400/10 rounded-full blur-[120px]" />

        <div className="relative z-10">

          {/* Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm font-medium mb-7">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#00d9ff]"></span>
            UPDATE IN PROGRESS
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            We’re Updating
            <span className="block text-cyan-400 mt-2">
              This Section
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto leading-7">
            We’re currently working on some exciting updates.
            <br />
            This section will be available very soon.
          </p>

          {/* Loading */}
          <div className="mt-10 flex justify-center">
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:150ms]"></span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:300ms]"></span>
            </div>
          </div>

          {/* Back Home */}
          <Link
            to="/"
            className="inline-block mt-10 px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CareerHub;