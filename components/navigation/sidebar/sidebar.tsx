import React from 'react'
import { SidebarProps } from '.'

function Sidebar({
    children
}: SidebarProps) {
    return (
        <div className='fixed h-screen w-16 lg:w-[290px] xl:w-[290px] transition-all ease-in-out duration-500'>
            <div className='flex flex-col left-0 h-full px-1 lg:px-4 py-5 bg-slate-100'>
                {children}
            </div>
        </div>
    )
}

export default Sidebar