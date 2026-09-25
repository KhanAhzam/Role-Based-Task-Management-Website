import React from 'react'

const Button1_SignOut = ({children, onClick}) => {
  return (
    <div>
      
        <button 
          className='bg-white rounded-3xl px-5 py-1.5 cursor-pointer text-lg font-semibold'
          onClick={onClick}
        >
            {children}
        </button>

    </div>
  )
}

export default Button1_SignOut
