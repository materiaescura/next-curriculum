import React from 'react'

const Footer = () => {
  return (
   <footer className='mt-16 mb-8'>
        <p className='text-1xl text-first-color text-center'>
         This website used NextJS + SSR (Server Side Rendering) + Vercel (as platform)
        </p>
        <p className='text-1xl text-first-color text-center'>
            You can find the source-code of this website at:
            https://github.com/materiaescura/next-curriculum
        </p>
   </footer>
  )
}

export default Footer