import React from 'react'
import Image from 'next/image'
import Sidebar, { SidebarItem } from '../navigation/sidebar'

function Index({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Sidebar>
                <div className='flex items-center mt-3 mb-10 sm:flex sm:justify-center'>
                    <Image src="/assets/complete-brand.png" width={100} height={10} alt="logo" />
                </div>
                <div className='flex-grow'>
                    <SidebarItem icon='grid_view' title='Dashboard' link='/dashboard' active={true} />
                    <SidebarItem icon='groups' title='Vendor' link='/vendor' active={false} />
                    <SidebarItem icon='style' title='Tipe' link='/type' active={false} />
                    <SidebarItem icon='place' title='Titik Iklan' link='/item' active={false} />
                    <SidebarItem icon='account_tree' title='Project' link='/project' active={false} />
                </div>
                <SidebarItem icon='power_settings_new' title='Logout' link='/logout' active={false} />
            </Sidebar>
            <div className='w-full h-screen flex flex-col bg-slate-300 pl-16 lg:pl-[290px] xl:pl-[290px] py-1 transition-all ease-in-out duration-500'>
                {children}
            </div>
        </div>
    )
}

export default Index