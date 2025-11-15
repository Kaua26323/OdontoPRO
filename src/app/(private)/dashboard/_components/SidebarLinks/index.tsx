import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";


interface SidebarLinksProps{
  href:     string;
  label:    string;
  icon:     ReactNode;
  isOpen:   boolean;
  pathname: string;
  isMobile?: boolean;
};

export function SidebarLinks({href, icon, label, isOpen, pathname, isMobile}: SidebarLinksProps){

  return(
    <Link href={href}>
      <div
        className={clsx("flex items-center gap-2.5 rounded-md transition-all  hover:scale-102 duration-400",
          {
            "px-2 py-2":     !isMobile,
            "text-white":  !isMobile,
            "justify-start": !isMobile,
            "bg-blue-600 hover:bg-blue-500": pathname === href,
            "bg-gray-600 hover:bg-gray-500": pathname !== href,
            
            "px-1 py-2":      isMobile,
            "text-black":   isMobile,
            "justify-center": isMobile,
            "bg-transparent": isMobile && pathname !== href,
            "bg-blue-400 hover:bg-blue-300": isMobile && pathname === href, 
            
        })}
      >
        <span className="w-6 h-6">{icon}</span>
        {isOpen && <span>{label}</span>}
      </div>
    </Link>
  )
}