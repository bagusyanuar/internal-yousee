import React from 'react'
import MyCard from '../../card'
import MyTable, { HeaderType } from '../../table'
import Button from '../../form/button'


function Index() {
    return (
        <main className='w-full py-5 px-5'>
            <div className='flex items-center mb-3'>
                <div className='w-full flex items-center justify-between'>

                    <span className='font-semibold text-xl text-slate-700 tracking-wider'>Titik Iklan</span>
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
                <div className='flex justify-end'>
                    <Button onClick={() => {}}>
                        <span className='material-icons-round mr-2 text-sm'>add_circle_outline</span>
                        <span className='tracking-wider text-sm'>Tambah Titik</span>
                    </Button>
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex items-center mb-3'>
                    <span className='text-sm text-slate-600 me-2'>Show :</span>
                    <select id='page_length' className='px-3 py-1 rounded-md border bg-inherit text-sm text-slate-600'>
                        <option className='bg-white text-slate-600 hover:bg-slate-200' value={10}>10</option>
                        <option className='bg-white text-slate-600 hover:bg-slate-200' value={25}>25</option>
                        <option className='bg-white text-slate-600 hover:bg-slate-200' value={50}>50</option>
                    </select>
                    <span className='text-sm text-slate-600 ms-2'>entries</span>
                </div>
                <div className='relative overflow-auto shadow-md sm:rounded-lg border border-slate-200 mb-2'>
                    <table className='rounded-md overflow-x-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className="text-sm text-slate-600 bg-gray-50">
                            <tr>
                                <td className='px-3 py-3 w-1 text-center font-semibold'>
                                    <span>#</span>
                                </td>
                                <td className='px-3 py-3 text-left font-semibold'>
                                    <span>Nama</span>
                                </td>
                                <td className='px-3 py-3 text-left font-semibold'>
                                    <span>Vendor</span>
                                </td>
                                <td className='px-3 py-3 text-left font-semibold'>
                                    <span>Alamat</span>
                                </td>
                                <td className='px-3 py-3 w-[5rem] text-center font-semibold'>
                                    <span>Posisi</span>
                                </td>
                                <td className='px-3 py-3 w-[6.5rem] text-center font-semibold'>
                                    <span>Tinggi (M)</span>
                                </td>
                                <td className='px-3 py-3 w-[6.5rem] text-center font-semibold'>
                                    <span>Lebar (M)</span>
                                </td>
                                <td className='px-3 py-3 w-[5rem] text-center font-semibold'>
                                    <span>Aksi</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white border-b'>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    1
                                </td>
                                <td className='px-3 py-3 text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-justify'>Baliho Depan UNSA</span>
                                </td>
                                <td className='px-3 py-3 text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-justify'>MADE Digital Printing</span>
                                </td>
                                <td className='px-3 py-3 text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-justify'>Jl. Kali Sindang No.RT.01 / 03, Jagalan, Kec. Jebres, Kota Surakarta, Jawa Tengah 57124</span>
                                </td>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-justify'>Vertical</span>
                                </td>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-center'>3.5</span>
                                </td>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-center'>3.5</span>
                                </td>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    <span className="material-icons-round">
                                        more_vert
                                    </span>
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
