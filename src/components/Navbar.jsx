import React from 'react'

import Button1 from './Buttons/Button1'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2 h-full'>
      
        <div className="logo text-white text-5xl">
            LOGO
        </div>

        <div className="signout">
            <Button1>
                Sign Out
            </Button1>
        </div>

    </div>
  )
}

export default Navbar
