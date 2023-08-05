import React from 'react'
import Sidebar from '../navigation/sidebar'

function Index({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Sidebar>

            </Sidebar>
            <div className='w-full h-screen flex flex-col bg-slate-200 pl-16 lg:pl-[290px] xl:pl-[290px] py-1 transition-all ease-in-out duration-500'>
                {children}
            </div>
        </div>
    )
}

export default Index