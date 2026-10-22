import React from 'react'

const LoginLeft = () => {
  return (
    <div className='hidden lg:flex lg:w-2/5 bg-[url("/bg-img.png")] bg-cover 
    bg-center bg-no-repeat flex-col justify-between p-12 shrink-0 select-none'>
        <div>
            <img src="/logo.svg" alt="Logo" className='size-9.5' />
            <span className='text-4xl font-medium text-white'>Builder AI</span>
        </div>
        <div>
            <h2>Build your presence on web</h2>
        </div>
    </div>
  )
}

export default LoginLeft