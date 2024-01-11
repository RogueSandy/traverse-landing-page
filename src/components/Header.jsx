import React from 'react'

export default function Header() {
  return (
    <header className="relative min-h-screen flex flex-col justify-evenly items-center z-0 preserve-3d">
        <div className="absolute bg-gradient-to-b inset-0 bottom-3/4 from-accent to-transparent"></div>
        <div className="absolute bg-gradient-to-t inset-0 top-1/3 -bottom-32 from-bkg/80 to-transparent distance-1"></div>
        <img 
            sizes="(min-width: 500px) 480w, 650w, 800w, 1300w"
            srcSet="./assets/hero-xs.jpg 480w, ./assets/hero-sm.jpg 650w, ./assets/hero-md.jpg 800w, ./assets/hero-lg.jpg 1300w"
            src='/assets/hero.jpg' 
            aria-hidden="true" 
            className="absolute w-full h-full object-cover object-center -z-20 distance-1" 
        />
        <h1 className="text-center font-bold text-5xl capitalize tracking-wide py-12 drop-shadow-text-sm md:drop-shadow-text-md lg:drop-shadow-text-lg distance-2">
            Unique trips for<br /> 
            Adventurous <br />
            Travelers
        </h1>
        <a href="#contact-form" className="bg-accent text-bkg font-medium m-1 px-8 py-3 rounded-full border border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-2 ring-offset-bkg hover:bg-accent/90 flex items-center space-x-2 drop-shadow-text-lg hover:drop-shadow-none transition-shadow distance-2">
            <span className='tracking-wide uppercase'>Book a Trip</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M231.38,46.54a12,12,0,0,0-10.29-2.18L161.4,59.28l-60-30a12,12,0,0,0-8.28-.91l-64,16A12,12,0,0,0,20,56V200a12,12,0,0,0,14.91,11.64L94.6,196.72l60,30a12,12,0,0,0,8.28.91l64-16A12,12,0,0,0,236,200V56A12,12,0,0,0,231.38,46.54ZM108,59.42l40,20V196.58l-40-20Zm-64,6,40-10V174.63l-40,10ZM212,190.63l-40,10V81.37l40-10Z"></path></svg>
        </a>
    </header>
  )
}
