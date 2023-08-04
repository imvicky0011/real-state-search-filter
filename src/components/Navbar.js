import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Left side - takes 50% width */}
      <div className="w-1/2">
        <span className="text-xl font-bold">LOGO</span>
      </div>

      {/* Right side - takes 50% width */}
      <div className="w-1/2 flex justify-end space-x-4">
        <span className="text-lg">Home</span>
        <span className="text-lg">About</span>
        <span className="text-lg">Contact</span>
        <span className="text-lg">Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
