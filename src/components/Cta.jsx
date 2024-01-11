import React from 'react'
import { motion } from 'framer-motion'

// fake post email handling
function postEmailToDatabase(email) {
  console.info(`Your Email is ${email}`)
  return new Promise(resolve => setTimeout(resolve, 2000))
}

const contactBtnOptions = {
  pending: `
    <svg class=" animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path></svg>
    <span class="uppercase tracking-wide animate-pulse">Sending...</span>
  `,
  success: `
    <span class="uppercase tracking-wide">Thank You!</span>
    <span class="uppercase tracking-wide">✌️</span>
  `,
}

// form submit action
async function handleFormSubmit(e) {
  e.preventDefault()
  document.getElementById('contactBtn').setAttribute('disabled', 'true')
  document.getElementById('email').setAttribute('disabled', 'true')

  document.getElementById('contactBtn').innerHTML = contactBtnOptions.pending

  const userEmail = document.getElementById('email').value
  document.getElementById('email').style.display = 'none'
  await postEmailToDatabase(userEmail)

  document.getElementById('contactBtn').innerHTML  = contactBtnOptions.success

}

export default function Cta() {
  return (
    <motion.section 
      aria-labelledby='map' 
      initial={{opacity:0, y: 50}}
      whileInView={{opacity:1, y: 0}}
      transition={{delay: 0.2}}
      id='contact-form'
      className='container grid gap-4 text-center max-w-prose' 
    >
        <div>
            <small className="tracking-widest uppercase text-accent">It's time to Explore</small>
            <h2 id='map' className="text-3xl tracking-wide font-bold">Get the Hidden Location</h2>
        </div>
        <p className=' text-muted max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam ipsam aliquam soluta obcaecati aliquid magni at eligendi ad aperiam.</p>

        <form onSubmit={handleFormSubmit} className="border-4 border-accent rounded-full p-1 flex justify-between items-center max-w-md mx-auto">
            <input type="email" id='email' required placeholder='Email Address' className="p-2 mx-4 bg-transparent w-full text-sm flex-1 border-b-2 border-transparent rounded-none caret-accent placeholder:text-white focus:placeholder:text-muted focus:outline-none focus:border-accent" />
            <label htmlFor="email" className="sr-only">Enter Your Email Address</label>

            <button className="bg-accent text-bkg font-medium m-1 text-sm px-4 md:px-8 py-3 rounded-full border border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-2 ring-offset-bkg hover:bg-accent/90 flex items-center space-x-2 shrink-0" id='contactBtn'>

                <span className='tracking-wide uppercase'>Sign Up</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  className="pointer-events-none" fill="currentColor" viewBox="0 0 256 256"><path d="M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3,37.28l84.32,40,40,84.32a19.81,19.81,0,0,0,18,11.44c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM157,220.92l-33.72-71.19,45.25-45.25a12,12,0,0,0-17-17l-45.25,45.25L35.08,99,210,46Z"></path></svg>
            </button>
        </form>
    </motion.section>
  )
}
