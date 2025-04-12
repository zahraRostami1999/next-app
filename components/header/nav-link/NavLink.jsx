"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <div className={`${path === href ? 'text-yellow-300' : 'text-white'}`}>
      <Link href={href}>{children}</Link>
    </div>
  )
}

export default NavLink;
