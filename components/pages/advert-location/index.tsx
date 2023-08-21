import React from 'react'
import MyCard from '../../card'
import MyTable, { HeaderType } from '../../table'
import Button from '../../form/button'
import DropdownAction from './dropdown-action'
import { Dropdown } from 'flowbite-react'


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
                    <Button onClick={() => { }}>
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
                <div className='overflow-x-auto shadow-md sm:rounded-lg border border-slate-200 mb-2'>
                    <table className='rounded-md overflow-x-scroll w-full text-left text-gray-500 dark:text-gray-400'>
                        <thead className="text-xs text-slate-600 bg-gray-50">
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
                                <td className='px-3 py-3 w-[7rem] text-center font-semibold'>
                                    <span>Aksi</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody className='text-xs'>
                            <tr className='bg-white border-b'>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    1
                                </td>
                                <td className='px-3 py-3 text-gray-500 text-xs'>
                                    <span className='overflow-ellipsis line-clamp-3 text-justify'>Baliho Depan UNSA</span>
                                </td>
                                <td className='px-3 py-3 text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-justify'>MADE Digital Printing</span>
                                </td>
                                <td className='px-3 py-3 text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-justify'>Jl. Kali Sindang No.RT.01 / 03, Jagalan, Kec. Jebres, Kota Surakarta, Jawa Tengah 57124</span>
                                </td>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3'>Vertical</span>
                                </td>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-center'>3.5</span>
                                </td>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                    <span className='overflow-ellipsis line-clamp-3 text-center'>3.5</span>
                                </td>
                                <td className='px-3 py-3 text-center text-gray-500'>
                                <DropdownAction />
                                    {/* <div className='flex items-center w-full justify-center'>
                                        <a href='#' className='flex items-center btn-delete border rounded-md border-main px-2 py-1 text-main hover:text-red-500 mr-1'>
                                            <span className="material-icons-round text-xs">
                                                collections
                                            </span>
                                        </a>
                                        <a href='#' className='btn-edit border rounded-md border-yellow-400 px-2 py-1 text-yellow-400 hover:text-yellow-500 mr-1'>
                                            <span className="material-icons-round text-xs">
                                                border_color
                                            </span>
                                        </a>
                                        <a href='#' className='btn-delete border rounded-md border-red-400 px-2 py-1 text-red-400 hover:text-red-500'>
                                            <span className="material-icons-round text-xs">
                                                delete
                                            </span>
                                        </a>

                                    </div> */}
                                </td>
                            </tr>
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
                                    <DropdownAction />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <nav className='flex items-center justify-between pt-3'>
                    <span className='text-sm text-slate-600'>Showig 1 - 2 of 2 (1 pages)</span>
                    <ul className='inline-flex items-center -space-x-px'>
                        <li>
                            <a href='#' onClick={(e) => { e.preventDefault(); }} className={`px-3 py-2 ml-0 leading-tight text-sm ${0 === 0 ? 'text-slate-400' : 'text-slate-600'} border border-slate-300 rounded-l-md`}>
                                <span className="material-icons-round text-sm">
                                    first_page
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href='#' onClick={(e) => { e.preventDefault(); }} className={`px-3 py-2 ml-0 leading-tight text-sm ${0 === 0 ? 'text-slate-400' : 'text-slate-600'} border border-slate-300`}>
                                <span className="material-icons-round text-sm">
                                    chevron_left
                                </span>
                            </a>
                        </li>
                        <li className=''>
                            <a href='#' onClick={(e) => { e.preventDefault(); }} data-page={1} className={`${1 === 1 ? 'bg-main text-white border-main' : 'text-slate-600 border-slate-300'} text-sm  px-3 py-2 leading-tight border`}>
                                {1}
                            </a>
                        </li>
                        <li>
                            <a href='#' onClick={(e) => { e.preventDefault(); }} className={`px-3 py-2 ml-0 leading-tight text-sm ${0 === 0 || 0 === 0 ? 'text-slate-400' : 'text-slate-600'} border border-slate-300`}>
                                <span className="material-icons-round text-sm">
                                    chevron_right
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href='#' onClick={(e) => { e.preventDefault(); }} className={`px-3 py-2 ml-0 leading-tight text-sm ${0 === 0 || 0 === 0 ? 'text-slate-400' : 'text-slate-600'} border border-slate-300 rounded-r-md`}>
                                <span className="material-icons-round text-sm">
                                    last_page
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </MyCard>
        </main>
    )
}

export default Index
