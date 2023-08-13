import React from 'react'
import MyCard from '../../card'
import MyTable, { HeaderType } from '../../table'
import Button from '../../form/button'
import DropdownAction from './dropdown-action'


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
                {/* <div className='relative overflow-x-auto overflow-y-visible shadow-md sm:rounded-lg border border-slate-200 mb-2'>
                    <table className='rounded-md overflow-x-scroll overflow-y-visible w-full text-sm text-left text-gray-500 dark:text-gray-400'>
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
                                    <DropdownAction/>
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
                                    <DropdownAction/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
                <div className="flex flex-col">
                    <div className="-my-2 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow  border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Jane Cooper
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Regional Paradigm Technician
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                jane.cooper@example.com
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Admin
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="relative inline-block text-left">
                                                    <div>
                                                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                            Options
                                                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                   
                                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                                        <div className="py-1" role="none">
                                                            <a href="#" className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
                                                                <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                                    <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                                                </svg>
                                                                Edit
                                                            </a>
                                                            <a href="#" className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
                                                                <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                                                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                                                </svg>
                                                                Duplicate
                                                            </a>
                                                        </div>
                                                        <div className="py-1" role="none">
                                                            <a href="#" className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">
                                                                <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                                                    <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                                </svg>
                                                                Archive
                                                            </a>
                                                            <a href="#" className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
                                                                <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                                                </svg>
                                                                Move
                                                            </a>
                                                        </div>
                                                        <div className="py-1" role="none">
                                                            <a href="#" className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">
                                                                <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                                                </svg>
                                                                Share
                                                            </a>
                                                            <a href="#" className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-5">
                                                                <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                                                </svg>
                                                                Add to favorites
                                                            </a>
                                                        </div>
                                                        <div className="py-1" role="none">
                                                            <a href="#" className="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-6">
                                                                <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                                </svg>
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Cody Fisher
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Product Directives Officer
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                cody.fisher@example.com
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Owner
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
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
