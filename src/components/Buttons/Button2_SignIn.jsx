import React from 'react'

const Button2_SignIn = ({children}) => {
  return (
    <div>
      
      <button 
        type="submit" 
        className='bg-[#6D54B5] rounded-xl w-full py-3 text-white cursor-pointer text-xl font-semibold'
      >
        {children}
      </button>

    </div>
  )
}

export default Button2_SignIn
