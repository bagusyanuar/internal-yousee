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
                | HTMLSpanElement
                | HTMLHeadingElement;
            // console.log('contains', target?.contains(innerRef.current));
            console.log('not same',target !== innerRef.current);
            console.log(target, innerRef.current);

            // if ((target?.contains(innerRef.current) && target !== innerRef.current)) {
            //     callback()
            // }
            if ((target !== innerRef.current)) {
                callback()
            }

        };
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [innerRef]);

    return innerRef;
}


interface WindowDimentions {
    width: number;
    height: number;
}

function DropdownAction({index}: {index: number}) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({ width: 0, height: 0 });
    const [elementX, setElementX] = useState<number>(0);

    useEffect(() => {
        const { innerHeight: height, innerWidth: width } = window
        let wd: WindowDimentions = {
            width, height
        }
        setWindowDimensions(wd)
        function handleResize() {
            const { innerHeight: height, innerWidth: width } = window
            let wd: WindowDimentions = {
                width, height
            }
            setWindowDimensions(wd)
            console.log(wd);
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
        setElementX(r)
        console.log(windowDimensions.width, elX, ref.current.getBoundingClientRect().left, elementX, r);
        console.log(elementX);
        setIsOpen(current => !current)
    }
    return (
        <div className='inline-block text-left'>
            <button onClick={(e) => { toggleOpen(e); }} data-index={index} type="button" aria-expanded="true" aria-haspopup="true" className=''>
                <span ref={ref} className="material-icons-round text-sm" >
                    more_vert
                </span>
            </button>
            <div style={{ right: `${elementX}px` }} className={`${isOpen ? "absolute transition ease-in duration-75 " : "hidden transition ease-out duration-100"}  z-999 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-2`} role="menu" aria-orientation="vertical">
                <div className="py-1 px-1 bg-white text-xs" role="none">
                    <a href='#' onClick={() => { }} className="flex items-center justify-start text-gray-600 w-full px-4 py-2 text-xs hover:bg-slate-100" role="menuitem" tabIndex={-1} id="menu-item-3">
                        <span className='material-icons-round text-sm mr-2'>border_color</span>
                        <span>Edit</span>
                    </a>
                    <a href='#' onClick={() => { }} className="flex items-center justify-start text-gray-600 w-full px-4 py-2 text-left text-xs hover:bg-slate-100" role="menuitem" tabIndex={-1} id="menu-item-3">
                        <span className='material-icons-round text-sm mr-2'>delete</span>
                        <span>Hapus</span>
                    </a>
                    <a href='#' onClick={() => { }} className="flex items-center justify-start text-gray-600 w-full px-4 py-2 text-left text-xs hover:bg-slate-100" role="menuitem" tabIndex={-1} id="menu-item-3">
                        <span className='material-icons-round text-sm mr-2'>info</span>
                        <span>Detail</span>
                    </a>
                    <hr />
                    <a href='#' onClick={() => { }} className="flex items-center justify-start text-gray-600 w-full px-4 py-2 text-left text-xs hover:bg-slate-100" role="menuitem" tabIndex={-1} id="menu-item-3">
                        <span className='material-icons-round text-sm mr-2'>collections</span>
                        <span>Gambar</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DropdownAction