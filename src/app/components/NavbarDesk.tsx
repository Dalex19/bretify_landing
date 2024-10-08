import React from 'react'

function NavbarDesk() {
  return (
    <div className=" w-full flex justify-between items-center text-black">
    <h2 className="font-bold font-clashDisplay">B R E T I F Y</h2>
    <nav className="flex gap-4 font-clashDisplayRegular">
      <a className='transition-all hover:cursor-pointer hover:underline ' href='#platform'>Plataforma</a>
      <a className='transition-all hover:cursor-pointer hover:underline ' href='#about-us'>Quienes Somos</a>
      <a className='transition-all hover:cursor-pointer hover:underline ' href='#what-do-we-do'>Que hacemos</a>
      
    </nav>
    <button type="submit" className="btn">Unetenos</button>
  </div>  
  )
}

export default NavbarDesk