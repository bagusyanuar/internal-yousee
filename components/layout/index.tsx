import React from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Sidebar, { SidebarItem } from '../navigation/sidebar'

function Index({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const path = router.pathname
    return (
        <div>
            <Sidebar>
                <div className='flex items-center justify-center mt-3 mb-10 sm:flex md:flex'>
                    <Image src="/assets/complete-brand.png" width={100} height={10} alt="logo" className='w-2/3 lg:w-1/2' />
                </div>
                <div className='flex-grow'>
                    <SidebarItem icon='grid_view' title='Dashboard' link='/dashboard' active={path.startsWith('/dashboard')} />
                    <SidebarItem icon='groups' title='Vendor' link='/vendor' active={path.startsWith('/vendor')} />
                    <SidebarItem icon='style' title='Tipe' link='/type' active={path.startsWith('/type')} />
                    <SidebarItem icon='place' title='Titik Iklan' link='/item' active={false} />
                    <SidebarItem icon='account_tree' title='Project' link='/project' active={false} />
                </div>
                <div className='w-full rounded-md bg-white shadow-md p-2 lg:p-3 flex flex-col'>
                    <div className='items-center mb-3 hidden lg:flex'>
                        <Image src="/assets/avatar.png" width={50} height={50} alt='avatar' className='rounded-full mr-3' />
                        <div className='flex-col hidden lg:flex'>
                            <span className='text-sm font-bold text-slate-700 mb-0'>Johnny</span>
                            <span className='text-xs text-slate-400 mt-0'>Administrator</span>
                        </div>
                    </div>
                    <button className='w-full flex items-center justify-center rounded-md py-1 px-1 sm:py-1 sm:px-1 md:py-1 md:px-1 lg:py-2 lg:px-4 text-red-400 bg-transparent sm:bg-transparent md:bg-transparent lg:bg-red-400 bg-opacity-30 md:bg-opacity-30 lg:bg-opacity-30 hover:bg-opacity-50 transition-all ease-in-out duration-500'>
                        <span className='material-icons-round mr-0 lg:mr-1 font-light'>power_settings_new</span>
                        <span className='text-red-400 font-semibold hidden sm:hidden md:hidden lg:block'>Logout</span>
                    </button>
                </div>
            </Sidebar>
            <div className='w-full h-screen flex flex-col bg-[#f7f7f7] pl-16 lg:pl-[290px] xl:pl-[290px] transition-all ease-in-out duration-500'>
                {children}
            </div>
        </div>
    )
}

export default Index