import React from 'react'
import { TextfieldProps } from '.'

function Textfield({
    type = 'text',
    onChange,
    value,
    className = '',
    placeholder = '',
    disabled = false
}: TextfieldProps) {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let value: string = e.currentTarget.value
        onChange(e, value)
    }
  return (
    <input
            disabled={disabled}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            value={value}
            className={`form-input rounded-md border border-slate-200 py-2.5 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block focus:outline-none focus:border-slate-300 ${className}`} />
  )
}

export default Textfield