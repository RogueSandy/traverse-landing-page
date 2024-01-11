import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-accent mt-16 sm:mt-24 lg:mt-40 py-6 sm:py-8 lg:py-12 gap-12">
        <div className='container flex flex-wrap md:justify-between items-center md:items-start'>
            <div className="grid gap-2 grow justify-items-center md:justify-items-start basis-full md:basis-1/4">
                <svg aria-label="Traverse Logo" className='w-32 sm:w-48 lg:w-56' width="280" viewBox="0 0 357 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.555 21.228c-3.033.534-4.35 4.151-2.37 6.51l21.78 25.957c1.98 2.359 5.77 1.69 6.823-1.203l11.59-31.84c1.053-2.894-1.421-5.843-4.454-5.308l-33.37 5.884Z" fill="#fff" />
                <path d="M84.795 63.81c3.032-.534 4.349-4.151 2.37-6.51l-21.78-25.957c-1.98-2.359-5.77-1.69-6.824 1.203L46.972 64.387c-1.053 2.894 1.421 5.842 4.453 5.307l33.37-5.884Z" fill="#66CCC1" />
                <path d="M127.81 64.519v-41.76h9.42v41.76h-9.42Zm-13.26-34.14v-8.22h35.94v8.22h-35.94Zm34.559 34.14v-29.16h9.18v29.16h-9.18Zm9.18-16.02-3.84-3c.76-3.4 2.04-6.04 3.84-7.92 1.8-1.88 4.3-2.82 7.5-2.82 1.4 0 2.62.22 3.66.66 1.08.4 2.02 1.04 2.82 1.92l-5.46 6.9c-.4-.44-.9-.78-1.5-1.02s-1.28-.36-2.04-.36c-1.52 0-2.74.48-3.66 1.44-.88.92-1.32 2.32-1.32 4.2Zm27.785 16.62c-2.68 0-5.08-.66-7.2-1.98-2.08-1.32-3.74-3.12-4.98-5.4-1.2-2.28-1.8-4.88-1.8-7.8s.6-5.52 1.8-7.8c1.24-2.28 2.9-4.08 4.98-5.4 2.12-1.32 4.52-1.98 7.2-1.98 1.96 0 3.72.38 5.28 1.14 1.6.76 2.9 1.82 3.9 3.18 1 1.32 1.56 2.84 1.68 4.56v12.6c-.12 1.72-.68 3.26-1.68 4.62-.96 1.32-2.24 2.36-3.84 3.12-1.6.76-3.38 1.14-5.34 1.14Zm1.86-8.28c1.96 0 3.54-.64 4.74-1.92 1.2-1.32 1.8-2.98 1.8-4.98 0-1.36-.28-2.56-.84-3.6a5.51 5.51 0 0 0-2.28-2.4c-.96-.6-2.08-.9-3.36-.9-1.28 0-2.42.3-3.42.9-.96.56-1.74 1.36-2.34 2.4-.56 1.04-.84 2.24-.84 3.6 0 1.32.28 2.5.84 3.54a6.293 6.293 0 0 0 2.34 2.46c1 .6 2.12.9 3.36.9Zm6.18 7.68v-7.86l1.38-7.08-1.38-7.08v-7.14h9v29.16h-9Zm24.644 0-12.36-29.16h9.9l8.4 24.3h-4.32l8.4-24.3h9.72l-12.36 29.1-7.38.06Zm36.626.66c-3.16 0-5.98-.64-8.46-1.92-2.44-1.32-4.36-3.14-5.76-5.46-1.4-2.32-2.1-4.94-2.1-7.86s.68-5.52 2.04-7.8c1.4-2.32 3.28-4.14 5.64-5.46 2.36-1.32 5.02-1.98 7.98-1.98 2.88 0 5.42.62 7.62 1.86 2.2 1.24 3.92 2.96 5.16 5.16 1.28 2.2 1.92 4.72 1.92 7.56 0 .52-.04 1.08-.12 1.68-.04.56-.14 1.22-.3 1.98l-25.14.06v-6.3l21.24-.06-3.96 2.64c-.04-1.68-.3-3.06-.78-4.14-.48-1.12-1.2-1.96-2.16-2.52-.92-.6-2.06-.9-3.42-.9-1.44 0-2.7.34-3.78 1.02-1.04.64-1.86 1.56-2.46 2.76-.56 1.2-.84 2.66-.84 4.38 0 1.72.3 3.2.9 4.44.64 1.2 1.52 2.14 2.64 2.82 1.16.64 2.52.96 4.08.96 1.44 0 2.74-.24 3.9-.72a8.893 8.893 0 0 0 3.06-2.28l5.04 5.04a13.606 13.606 0 0 1-5.22 3.78c-2.04.84-4.28 1.26-6.72 1.26Zm18.471-.66v-29.16h9.18v29.16h-9.18Zm9.18-16.02-3.84-3c.76-3.4 2.04-6.04 3.84-7.92 1.8-1.88 4.3-2.82 7.5-2.82 1.4 0 2.62.22 3.66.66 1.08.4 2.02 1.04 2.82 1.92l-5.46 6.9c-.4-.44-.9-.78-1.5-1.02s-1.28-.36-2.04-.36c-1.52 0-2.74.48-3.66 1.44-.88.92-1.32 2.32-1.32 4.2Zm26.401 16.74c-1.72 0-3.42-.22-5.1-.66-1.64-.44-3.18-1.06-4.62-1.86-1.4-.84-2.6-1.8-3.6-2.88l5.22-5.28c.96 1.04 2.1 1.86 3.42 2.46 1.32.56 2.76.84 4.32.84 1.08 0 1.9-.16 2.46-.48.6-.32.9-.76.9-1.32 0-.72-.36-1.26-1.08-1.62-.68-.4-1.56-.74-2.64-1.02-1.08-.32-2.22-.66-3.42-1.02-1.2-.36-2.34-.86-3.42-1.5s-1.96-1.52-2.64-2.64c-.68-1.16-1.02-2.62-1.02-4.38 0-1.88.48-3.5 1.44-4.86.96-1.4 2.32-2.5 4.08-3.3 1.76-.8 3.82-1.2 6.18-1.2 2.48 0 4.76.44 6.84 1.32 2.12.84 3.84 2.1 5.16 3.78l-5.22 5.28c-.92-1.08-1.96-1.84-3.12-2.28-1.12-.44-2.22-.66-3.3-.66-1.04 0-1.82.16-2.34.48-.52.28-.78.7-.78 1.26 0 .6.34 1.08 1.02 1.44.68.36 1.56.68 2.64.96 1.08.28 2.22.62 3.42 1.02 1.2.4 2.34.94 3.42 1.62 1.08.68 1.96 1.6 2.64 2.76.68 1.12 1.02 2.6 1.02 4.44 0 2.84-1.08 5.1-3.24 6.78-2.12 1.68-5 2.52-8.64 2.52Zm31.261-.06c-3.16 0-5.98-.64-8.46-1.92-2.44-1.32-4.36-3.14-5.76-5.46-1.4-2.32-2.1-4.94-2.1-7.86s.68-5.52 2.04-7.8c1.4-2.32 3.28-4.14 5.64-5.46 2.36-1.32 5.02-1.98 7.98-1.98 2.88 0 5.42.62 7.62 1.86 2.2 1.24 3.92 2.96 5.16 5.16 1.28 2.2 1.92 4.72 1.92 7.56 0 .52-.04 1.08-.12 1.68-.04.56-.14 1.22-.3 1.98l-25.14.06v-6.3l21.24-.06-3.96 2.64c-.04-1.68-.3-3.06-.78-4.14-.48-1.12-1.2-1.96-2.16-2.52-.92-.6-2.06-.9-3.42-.9-1.44 0-2.7.34-3.78 1.02-1.04.64-1.86 1.56-2.46 2.76-.56 1.2-.84 2.66-.84 4.38 0 1.72.3 3.2.9 4.44.64 1.2 1.52 2.14 2.64 2.82 1.16.64 2.52.96 4.08.96 1.44 0 2.74-.24 3.9-.72a8.893 8.893 0 0 0 3.06-2.28l5.04 5.04a13.606 13.606 0 0 1-5.22 3.78c-2.04.84-4.28 1.26-6.72 1.26Z" fill="#fff" />
                </svg>
                <p className="text-muted text-center text-sm md:text-left">
                    We create unique exxperiences <br /> for the adventures traveler.
                </p>
            </div>

            <nav aria-label='footer Navigation' className="text-sm flex flex-col items-center sm:items-start sm:flex-row text-center sm:text-left gap-6 justify-between md:justify-around grow basis-full md:basis-1/2 mt-2">
                <div className="grid gap-3">
                    <p className="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-4">About</p>
                    <ul aria-label='About Traverse'>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full'>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                Press
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                News
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="grid gap-3">
                    <p className="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-4">Location</p>
                    <ul aria-label='About Traverse'>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                India
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                US
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                Japan
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                Russia
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="grid gap-3">
                    <p className="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-4">Contact Us</p>
                    <ul aria-label='About Traverse'>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                Email
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full px-4'>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </footer>
  )
}
