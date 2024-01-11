import React from 'react'
import { motion } from 'framer-motion'

export default function Map() {
  return (
    <motion.section 
      aria-labelledby='map' 
      initial={{opacity:0, y: 50}}
      whileInView={{opacity:1, y: 0}}
      transition={{delay: 0.2}}
      viewport={{once: true}}
      className='container flex flex-wrap md:space-x-16 space-y-12 md:space-y-0 justify-between items-center'
    >
        <img src="/assets/map.png" alt="map" width='400' className='grow md:flex-1' loading='lazy' />
        <div className='grid gap-4 text-center md:text-left grow md:flex-1'>
            <div className='relative'>
                <div className=" hidden md:block absolute w-8 h-full bg-accent/10 -left-4"></div>
                <small className="tracking-widest uppercase text-accent">A Globe of Possiblities</small>
                <h2 id='map' className="text-3xl tracking-wide font-bold">Happy Travelers <br /> The World Over</h2>
            </div>
            <p className=' text-muted max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam ipsam aliquam soluta obcaecati aliquid magni at eligendi ad aperiam.</p>

        </div>
    </motion.section>


  )
}
