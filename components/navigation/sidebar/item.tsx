import React from 'react'
import Link from 'next/link'
import { SidebarItemProps } from '.'

function Item({
    link = '',
    active,
    title = 'Menu',
    icon = 'circle'
}: SidebarItemProps) {
    return (
        <Link href={link} className={`group flex items-center ${active ? 'bg-white' : 'hover:bg-white'} cursor-pointer h-[50px] rounded-md mb-2 pl-0 lg:pl-5 xl:pl-5 justify-center lg:justify-start xl:justify-start transition-all ease-in-out duration-500`}>
            <span className={`material-icons-round ${active ? 'text-main' : 'text-slate-500'} group-hover:text-main transition-all ease-in-out duration-500`}>{icon}</span>
            <span className={`${active ? 'text-slate-700' : 'text-slate-500'} group-hover:text-slate-700 font-semibold w-full ml-3 tracking-wider hidden lg:block xl:block transition-all ease-in-out duration-500`}>{title}</span>
        </Link>
    )
}

export default Item