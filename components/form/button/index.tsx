import React from 'react'
import Button from './button'

export interface ButtonProps {onClick: () => void, children: React.ReactNode, disabled?: boolean}
export default Button

