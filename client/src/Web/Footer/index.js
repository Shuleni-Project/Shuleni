import React from 'react'

function Footer() {

  return (
    <>
    <div className='flex flex-wrap-reverse border-none   bg-black text-white font-sans text-base min-h-[240px]'>
        <div className='min-w-150px flex-grow p-4 m-3 text-center md:text-left'>
            <p>Contact: +254 711 000 555 222</p>
            <p>Location: Nairobi, Kenya</p>
            <p>Email: shuleniwebapp@gmail.com</p>
            <p>Support</p>
        </div>
        <div className='min-w-150px flex-grow p-4 m-3 text-center md:text-left'>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Frequently Asked Questions (FAQ)</p>
            <p>Blog</p>
            <p>Testimonials</p>
        </div>
        <div className='min-w-150px flex-grow p-4 m-3 text-center md:text-left'>
            <p>About Us</p>
            <p>Partnerships</p>
            <p>Awards and Recognition</p>
            <p>Donations</p>
            <p>Accessibility</p>
        </div>
        <div className='min-w-150px flex-grow p-4 m-3 text-center md:text-left'>
            <p>Community</p>
            <p>Language Selection</p>
            <p>Security</p>
            <p>Mobile App</p>
            <p>Newsletter</p>
        </div>
    </div>
    <p className='flex border-none w-full bg-black text-white justify-center'>Copyright © {(new Date().getFullYear())}</p>
    </>
  )
}

export default Footer