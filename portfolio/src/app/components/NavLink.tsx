'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderLink } from '@/app/types/'
export interface NavLinkProps {
   link: HeaderLink
}

const NavLink = ({ link }: NavLinkProps) => {
   const pathName = usePathname()

   return (
      <Link
         className={`rounded p-1 text-white ${pathName === link.url && 'bg-gray-700'}`}
         href={link.url}
      >
         {link.title}
      </Link>
   )
}

export default NavLink
