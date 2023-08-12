import React from 'react'
import Image from 'next/image'
import MyCard from '../../card'
import Breadcrumbs, {BreadcrumbItem} from '../../breadcrumbs'

function Index() {
    const breadcrumbItems: Array<BreadcrumbItem> = [
        {
            title: 'Dashboard',
            icon : 'grid_view',
            link: '/dashboard'
        },
        {
            title: 'Tipe Media',
            icon : 'grid_view',
            link: '/dashboard'
        },
        {
            title: 'Tipe Media 2',
            icon : 'grid_view',
            link: '/dashboard'
        }
    ]
    return (
        <main className='w-full py-5 px-5'>
            <div className='flex items-center mb-3'>
                <div className='w-full flex items-center justify-between'>

                    <span className='font-bold text-2xl text-slate-700'>Tipe</span>
                    <Breadcrumbs items={breadcrumbItems}/>
                </div>
            </div>

            <div className='grid grid-cols-6 gap-4 place-content-center'>
                <MyCard className='py-4 px-4 flex flex-col items-center'>
                    <div className='w-full flex items-center justify-center'>
                        <Image src={`/assets/baliho.png`} alt='vendor-image' width={20} height={20} className='' />
                    </div>
                    <hr className='mt-3 mb-3 w-full' />
                    <span className='text-slate-700 font-bold leading-4'>Baliho</span>
                </MyCard>
                <MyCard className='py-4 px-4 flex flex-col items-center'>
                    <div className='w-full flex items-center justify-center'>
                        <Image src={`/assets/billboard.png`} alt='vendor-image' width={70} height={70} className='' />
                    </div>
                    <hr className='mt-3 mb-3 w-full' />
                    <span className='text-slate-700 font-bold leading-4'>Billboard</span>
                </MyCard>
                <MyCard className='py-4 px-4 flex flex-col items-center'>
                    <div className='w-full flex items-center justify-center'>
                        <Image src={`/assets/marker.png`} alt='vendor-image' width={70} height={70} className='' />
                    </div>
                    <hr className='mt-3 mb-3 w-full' />
                    <span className='text-slate-700 font-bold leading-4'>Videotron</span>
                </MyCard>
                <MyCard className='py-4 px-4 flex flex-col items-center'>
                    <div className='w-full flex items-center justify-center'>
                        <Image src={`/assets/marker.png`} alt='vendor-image' width={70} height={70} className='' />
                    </div>
                    <hr className='mt-3 mb-3 w-full' />
                    <span className='text-slate-700 font-bold leading-4'>Bando Jalan</span>
                </MyCard>

            </div>
        </main>
    )
}

export default Index