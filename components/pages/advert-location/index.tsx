import React from 'react'
import MyCard from '../../card'
import MyTable, { HeaderType } from '../../table'

const headers: Array<HeaderType> = [
    { value: 'Email', className: 'w-1/5', childClassName: 'justify-center' },
];

function Index() {
    return (
        <main className='w-full py-5 px-5'>
            <div className='flex items-center mb-3'>
                <div className='w-full flex items-center justify-between'>

                    <span className='font-bold text-2xl text-slate-700'>Titik Iklan</span>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-mainshade">
                                    <span className='material-icons-round mr-2'>grid_view</span>
                                    Dashboard
                                </a>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 text-sm font-semibold text-gray-400 md:ml-2 dark:text-gray-400">Titik Iklan</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <MyCard className='py-4 px-4 w-100'>
                <div className='relative overflow-auto shadow-md sm:rounded-lg border border-slate-200 mb-2'>
                    <table className='rounded-md overflow-x-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className="text-sm text-slate-600 bg-gray-50">
                            <tr>
                                <td className={`px-6 py-3 w-1 text-center font-semibold`}>
                                    <span>#</span>
                                </td>
                                <td className={`px-6 py-3 w-1/5 text-left font-semibold`}>
                                    <span>Nama</span>
                                </td>
                                <td className={`px-6 py-3 w-1/5 text-left font-semibold`}>
                                    <span>Vendor</span>
                                </td>
                                <td className={`px-6 py-3 text-left font-semibold`}>
                                    <span>Alamat</span>
                                </td>
                                <td className={`px-6 py-3 w-2 text-left font-semibold`}>
                                    <span>Posisi</span>
                                </td>
                                <td className={`px-6 py-3 w-2 text-left font-semibold`}>
                                    <span>Dimensi</span>
                                </td>
                                <td className={`px-6 py-3 w-2 text-left font-semibold`}>
                                    <span>Aksi</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white border-b'>
                                <td className={`px-6 py-3 text-gray-500 whitespace-nowrap w-1`}>
                                    1
                                </td>
                                <td className={`px-6 py-3 text-gray-500 whitespace-nowrap w-1`}>
                                    <span>Baliho Depan UNSA</span>
                                </td>
                                <td className={`px-6 py-3 text-gray-500 whitespace-nowrap w-1`}>
                                    <span>MADE Digital Printing</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </MyCard>
        </main>
    )
}

export default Index
