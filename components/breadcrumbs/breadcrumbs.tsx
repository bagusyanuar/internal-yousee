import React from 'react'
import { BreadcrumbProps } from '.'

function Breadcrumbs({
    items
}: BreadcrumbProps) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {
                    items.length > 1 ? <li className="inline-flex items-center">
                        <a href={items[0].link} className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-mainshade">
                            {items[0].icon !== undefined ? <span className='material-icons-round mr-2'>{items[0].icon}</span> : ''}
                            {items[0].title}
                        </a>
                    </li> : (items.length === 1 ? <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            {items[0].icon !== undefined ? <span className='material-icons-round mr-2'>{items[0].icon}</span> : ''}
                            <span className="ml-1 text-sm font-semibold text-gray-400 md:ml-2 dark:text-gray-400">{items[0].title}</span>
                        </div>
                    </li> : '')
                }
                {
                    items.slice(1, items.length).map((e, k) => {
                        console.log(e);
                        if (k !== (items.length - 2)) {
                            return (
                                <li className="inline-flex items-center" key={k}>
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href={e.link} className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-mainshade">
                                        {e.icon !== undefined ? <span className='material-icons-round mr-2'>{e.icon}</span> : ''}
                                        {e.title}
                                    </a>
                                </li>
                            )
                        }
                        return (
                            <li aria-current="page" key={k}>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    {e.icon !== undefined ? <span className='material-icons-round mr-2'>{e.icon}</span> : ''}
                                    <span className="ml-1 text-sm font-semibold text-gray-400 md:ml-2 dark:text-gray-400">{e.title}</span>
                                </div>
                            </li>
                        )
                    })
                }

            </ol>
        </nav>
    )
}

export default Breadcrumbs