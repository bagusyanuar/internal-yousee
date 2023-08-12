import React from 'react'
import { TableProps } from '.'
import Header from './header'

function Table({ headers }: TableProps) {
    return (
        <div>
            <div className='relative overflow-auto shadow-md sm:rounded-lg border border-slate-200 mb-2'>
                <table className='rounded-md overflow-x-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <Header headers={headers}/>
                </table>
            </div>
        </div>
    )
}

export default Table