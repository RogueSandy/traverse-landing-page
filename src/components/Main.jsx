import React, { useEffect, useRef } from 'react'
import Slides from './Slides'
import Map from './Map'
import Cta from './Cta'
import { motion } from 'framer-motion'

export default function Main() {

  return    (
    <main className=" z-10 relative mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">
        <motion.section
          initial={{opacity:0, y: 50}}
          whileInView={{opacity:1, y: 0}}
          transition={{delay: 0.2}}
          viewport={{once: true}}
          aria-labelledby='headline'
          className='relative container grid gap-4 text-center max-w-prose'
          
        >
            <div>
                <small className="tracking-widest uppercase text-accent drop-shadow-text-sm">What dreams are made of</small>
                <h2 id='headline' className="text-3xl tracking-wide font-bold drop-shadow-text-md">Trips for Explorers</h2>
            </div>
            <p className='text-muted drop-shadow-text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id autem deleniti repellendus molestiae nulla, porro inventore reiciendis fugit quae nam accusantium veritatis sunt, consequatur culpa a quo alias? Ratione, laudantium sint.</p>
        </motion.section>

        {/* Sliders images */}
        <Slides />
        <Map />
        <Cta />
    </main>
  )
}
