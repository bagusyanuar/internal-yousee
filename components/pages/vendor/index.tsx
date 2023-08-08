import React from 'react'
import Image from 'next/image'
import { TextfieldPrefixIcon } from '../../form/textfield'
import MyCard from '../../card'

function Index() {
  return (
    <main className='w-full py-5 px-5'>
      <div className='flex items-center mb-3'>
        <div className='w-full flex items-center justify-between'>

          <span className='font-bold text-2xl text-slate-700'>Vendor</span>
          <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-mainshade">
              <span className='material-icons-round mr-2'>grid_view</span>
              Dashboard
            </a>
          </li>
          {/* <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
            </div>
          </li> */}
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ml-1 text-sm font-semibold text-gray-400 md:ml-2 dark:text-gray-400">Vendor</span>
            </div>
          </li>
        </ol>
      </nav>
          {/* <div className=''>
            <TextfieldPrefixIcon
              icon='search'
              type='text'
              onChange={(e, v) => { }}
              value=''
              placeholder='Cari Vendor...'
            />
          </div> */}
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
          <MyCard className='py-4 px-4'>
            <div className='w-full flex items-center'>
              <Image src={`/assets/avatar.png`} alt='vendor-image' width={70} height={70} className='rounded-full mr-3'/>
              <div className='w-full flex flex-col'>
                <span className='font-bold overflow-ellipsis line-clamp-1 text-slate-700'>CV. Deras Advertising</span>
                <span className='font-light text-xs overflow-ellipsis line-clamp-2 text-slate-500 leading-4'>Jl. Gunung Kelud II / 7 Dukuhan, Jl. Nayu, Kadipiro, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57136</span>
              </div>
            </div>
            <hr className='mt-3 mb-3'/>
          </MyCard>
          <MyCard className='py-4 px-4'>
            <div>abc</div>
          </MyCard>
          <MyCard className='py-4 px-4'>
            <div>abc</div>
          </MyCard>
          <MyCard className='py-4 px-4'>
            <div>abc</div>
          </MyCard>
          <MyCard className='py-4 px-4'>
            <div>abc</div>
          </MyCard>
          <MyCard className='py-4 px-4'>
            <div>abc</div>
          </MyCard>
          <MyCard className='py-4 px-4'>
            <div>abc</div>
          </MyCard>
      </div>
    </main>
  )
}

export default Index