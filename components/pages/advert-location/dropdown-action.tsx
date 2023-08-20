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
            console.log('contains', target?.contains(innerRef.current));
            console.log('not same',target !== innerRef.current);

            if (target?.contains(innerRef.current) && target !== innerRef.current) {
                callback()
            }

        };
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [innerRef]);

    return innerRef;
}



function getWindowDimensions() {
    const { innerHeight: height, innerWidth: width } = window
    return { width, height }
}

interface WindowDimentions {
    width: number;
    height: number;
}

function DropdownAction() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({width: 0, height: 0});
    const [elementX, setElementX] = useState<number>(0);

    useEffect(() => {
        const { innerHeight: height, innerWidth: width } = window
        let wd: WindowDimentions = {
            width, height
        }
        function handleResize() {
            setWindowDimensions(wd)
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const ref = useOuterClick(() => {
        setIsOpen(false)
    })

    const toggleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let elX = ref.current.getBoundingClientRect().left
        let r = windowDimensions.width - elX - ref.current.getBoundingClientRect().width;
        console.log(r);
        
        setElementX(r)
        setIsOpen(current => !current)
    }
    return (
        <div className='inline-block text-left'>
            <button ref={ref} onClick={(e) => { toggleOpen(e); }} type="button" aria-expanded="true" aria-haspopup="true" className='text-sm'>
                <span className="material-icons-round text-sm">
                    more_vert
                </span>
            </button>
            <div className={`${isOpen ? "absolute transition ease-in duration-75 " + `right-[${elementX}px]` : "hidden transition ease-out duration-100"}  z-999 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-2`} role="menu" aria-orientation="vertical">
                <div className="py-1 px-1 bg-white" role="none">
                    <a href='#' onClick={() => { }} className="text-gray-600 block w-full px-4 py-2 text-left text-sm hover:bg-slate-100" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</a>
                </div>
            </div>
        </div>
    )
}

export default DropdownAction