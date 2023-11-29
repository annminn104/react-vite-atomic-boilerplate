import React from 'react'
import './index.scss'

interface IButtonProps {
  children?: React.ReactNode
}

const Button: React.FC<IButtonProps> = ({ children }) => {
  return <div className='a-button'>{children}</div>
}

export default Button
