import { User } from "lucide-react";
import React from "react";
import { GoHome } from "react-icons/go";

const Sidebar: React.FC = () => {
  const isActive = false; // Placeholder for active state logic
  
  return (
    <nav className="flex flex-col justify-between pl-12 py-8">
      <div className="w-12 h-12 bg-background" />
      <div className="flex flex-col -mt-12 items-center gap-4">
        {/* Logo */}
        <div className="size-8 bg-background border-black border-2 rounded-full" />
        {/* Links */}
        <div className="bg-white flex flex-col gap-2 p-2 border-border border rounded-full">
          <div className="bg-primary w-max p-2 rounded-full text-white">
            <GoHome className="size-6" />
          </div>
          <div className={`${isActive ? "bg-primary text-white" : "text-foreground hover:bg-primary/10"} transition duration-300 cursor-pointer w-max p-2 rounded-full`}>
            <GoHome className="size-6" />
          </div>
        </div>
      </div>
      <div className="bg-white p-2 border-border border rounded-full">
        <div className={`${isActive ? "bg-primary text-white" : "text-foreground hover:bg-primary/10"} transition duration-300 cursor-pointer w-max p-2 rounded-full`}>
          <User className="size-6" />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
