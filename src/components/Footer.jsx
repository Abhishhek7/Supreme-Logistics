import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-black py-8 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h2 className='text-2xl font-bold mb-4'>SUPREME LOGISTICS SOLUTIONS</h2>
            <p>Fast & Reliable Logistics.</p>
          </div>
          <div>
            <h2>Quick Links</h2>
            <div className='flex flex-col mt-4 space-y-2'>
              <Link to='/services'>Services</Link>
              <Link to='/testimonials'>Testimonials</Link>
            </div>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
            <div className='flex space-x-4 mb-4'>
              <FaFacebook size={24} className='text-blue-500 hover:text-blue-600' />
              <FaInstagram size={24} className='text-pink-500 hover:text-pink-600' />
              <FaTwitter size={24} className='text-blue-400 hover:text-blue-500' />
              <FaYoutube size={24} className='text-red-500 hover:text-red-600' />
            </div>
            <form className='flex items-center justify-center mt-8'>
              <input
                type='email'
                placeholder='Enter Your Email'
                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600'
              />
              <button className='bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600'>
              Send
              </button>
            </form>
          </div>
        </div>
        <div className='flex justify-between mt-8 border-t border-gray-700 pt-4'>
        <p>&copy; {new Date().getFullYear()} SUPREME LOGISTICS SOLUTIONS. All rights reserved.</p>

          
        </div>
      </div>
    </div>
  )
}

export default Footer
