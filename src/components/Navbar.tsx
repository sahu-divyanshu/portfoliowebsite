'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem,} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";



export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-8 inset-x-0 max-w-2xl mx-auto z-50", className)} >
      
      <Menu setActive={setActive}>
        <Link href={'/'}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <Link href={"/projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/projects">All Projects</HoveredLink>
                  <HoveredLink href="/frontendprojects">Front End</HoveredLink>
                  <HoveredLink href="/fullstackprojects">Full Stack</HoveredLink>  
              </div>
          </MenuItem>
        </Link>

        <Link href={'/contact'}>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
