import { User } from "lucide-react";
import React from "react";
import { GoHome } from "react-icons/go";
import { PiClockCountdown } from "react-icons/pi";

interface NavLink {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}

const navLinks: NavLink[] = [
  {
    id: "home",
    icon: GoHome,
    label: "Home",
    active: true,
  },
  {
    id: "sessions",
    icon: PiClockCountdown,
    label: "Sessions",
    active: false,
  },
];

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col justify-between pl-12 py-8">
      <div className="w-12 h-12 bg-background" />
      <div className="flex flex-col -mt-12 items-center gap-4">
        {/* Logo */}
        <div className="size-8 bg-background border-black border-2 rounded-full" />
        {/* Links */}
        <div className="bg-white flex flex-col gap-2 p-2 border-border border rounded-full">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className={`${
                  link.active
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-primary/10"
                } group relative transition duration-300 cursor-pointer w-max p-2 rounded-full`}
              >
                <Icon className="size-6" />
                {/* tooltip */}
                <div className="absolute top-1/2 -translate-y-1/2 left-full ml-4 flex items-center gap-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <hr className="border-muted-foreground w-12" />
                  <span>{link.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white p-2 border-border border rounded-full">
        <div className="group relative transition duration-300 cursor-pointer w-max p-2 rounded-full hover:bg-primary/10">
          <User className="size-6" />
          {/* tooltip */}
          <div className="absolute top-1/2 -translate-y-1/2 left-full ml-4 flex items-center gap-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
            <hr className="border-muted-foreground w-12" />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
