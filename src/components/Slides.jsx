import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const slides = [
    {"src": "/assets/slider-1.jpg", "body": "Oceans Wonders"},
    {"src": "/assets/slider-2.jpg", "body": "Waterfall Caves"},
    {"src": "/assets/slider-3.jpg", "body": "Rainbow Falls"},
    {"src": "/assets/slider-4.jpg", "body": "Oceans Wonders"},
    {"src": "/assets/slider-5.jpg", "body": "Oceans Wonders"},
    {"src": "/assets/slider-6.jpg", "body": "Oceans Wonders"},
    {"src": "/assets/slider-7.jpg", "body": "Oceans Wonders"},
    {"src": "/assets/slider-8.jpg", "body": "Oceans Wonders"},
]

export default function Slides() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderContainer = document.getElementById('slideContainer')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    const slide = [...document.querySelectorAll('#slideContainer div')]
    
    const handleClick = (e) => {
        e.currentTarget.id === 'prev' 
        ? setCurrentIndex(prevIndex => {
            return prevIndex -= 1
        }) : setCurrentIndex(prevIndex => {
            return prevIndex += 1
        })
    }
    const handleSlider = () => {
        if(sliderContainer){
            sliderContainer.style.transform = `translateX(-${currentIndex * slide[0].clientWidth}px)`
        }
    }
    // useEffect(() => {
    //     const slideObserver = new IntersectionObserver((slide) => {
    //         if(slide[0].isIntersecting){
    //             next.setAttribute('disabled', 'true')
    //         }
    //     }, {threshold: .75})
    //     slideObserver.observe(slide[slide.length -1])
    // }, [])

    useEffect(() => {
        handleSlider()

    }, [currentIndex])


  return (
    <>
        <motion.section 
            aria-labelledby='slider' 
            initial={{opacity:0, y: 50}}
            whileInView={{opacity:1, y: 0}}
            transition={{delay: 0.2}}
            viewport={{once: true}}
            className='container grid gap-4 text-center sm:text-left'
        >
            <div className='relative'>
                <div className=" hidden sm:block absolute w-8 h-full bg-accent/10 -left-4"></div>
                <div>
                    <small className="tracking-widest uppercase text-accent drop-shadow-text-sm">Off The Beaten Path</small>
                    <h2 id='slider' className="text-3xl tracking-wide font-bold drop-shadow-text-md">Places without People</h2>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center space-x-4 space-y-4'>
                    <p 
                        className=' text-muted max-w-2xl drop-shadow-text-sm'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero in consectetur architecto iusto itaque eius eligendi magni tenetur veniam.
                    </p>
                    <div className="flex space-x-4" id='slide-btn'>
                        <button 
                            id='prev' 
                            aria-label='show previous image' 
                            className='grid place-items-center bg-accent rounded-full p-2 text-bkg focus:outline-none focus:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent' 
                            onClick={(e) => handleClick(e)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H117l11.52,11.51a12,12,0,0,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,17L117,116h51A12,12,0,0,1,180,128Z"></path></svg>
                        </button>
                        <button 
                            id='next' 
                            aria-label='show next image' 
                            className='grid place-items-center bg-accent rounded-full p-2 text-bkg focus:outline-none focus:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent'
                            onClick={(e) => handleClick(e)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-92.49a12,12,0,0,1,0,17l-32,32a12,12,0,1,1-17-17L139,140H88a12,12,0,0,1,0-24h51l-11.52-11.51a12,12,0,1,1,17-17Z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.section>
        <motion.div 
            initial={{opacity:0, y: 50}}
            whileInView={{opacity:1, y: 0}}
            transition={{delay: 0.4}}
            viewport={{once: true}}
            className='-mt-10 sm:-mt-20 lg:-mt-36 container xs:w-screen'
        >
            <div id='slideContainer' className=" flex transition-transform duration-500" >
                    {slides.map((slide, i) => {
                        return (
                            <div data-slide key={i} className="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4">
                                <img src={slide.src} draggable='false' alt={slide.body} className="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer" />
                                <p className="left-4 py-2 px-4 absolute bottom-4 bg-bkg tracking-wide font-bold text-lg pointer-events-none [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">{slide.body}</p>
                            </div>
                        )
                    })}
            </div>
        </motion.div>
    </>
  )
}
