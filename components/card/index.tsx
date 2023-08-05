import React from 'react'

function Index({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <div className='w-full rounded-md bg-white shadow-md'>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default Index