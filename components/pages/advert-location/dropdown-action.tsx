import React, { useState, useEffect, useRef } from 'react'

function useOuterClick(callback: () => void): any {
    const innerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {

        window.addEventListener('click', handleClick);
        function handleClick(event: MouseEvent) {
            const target = event.target as HTMLDivElement
                | HTMLInputElement
                | HTMLParagraphElement
                | HTMLButtonElement
                | HTMLHeadingElement;
                console.log(innerRef.current);
                console.log(target);
                
            if (target?.contains(innerRef.current) ) {
                callback()
            }

        };
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [innerRef]);

    return innerRef;
}

function DropdownAction() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const ref = useOuterClick(() => {
        setIsOpen(false)
    })

    const toggleOpen = () => {
        setIsOpen(current => !current)
    }
    return (
        <div className='relative inline-block text-left'>
            <button ref={ref} onClick={toggleOpen} type="button" aria-expanded="true" aria-haspopup="true" className=''>
                <span className="material-icons-round">
                    more_vert
                </span>
            </button>
            <div className={`${isOpen ? "absolute transition ease-in duration-75" : "hidden transition ease-out duration-100"} right-0 z-999 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-2`} role="menu" aria-orientation="vertical">
                <div className="py-1 px-1 bg-white" role="none">
                    <a href='#' onClick={() => { }} className="text-gray-600 block w-full px-4 py-2 text-left text-sm hover:bg-slate-100" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</a>
                </div>
            </div>
        </div>
    )
}

export default DropdownAction