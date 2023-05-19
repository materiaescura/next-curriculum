import React from 'react'
import {FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'

const ContactMe = () => {
    return <div className='mt-8'>
                <ul className='flex items-center gap-8 text-first-color flex-wrap'>
                    <li className=' text-4xl'><FaTwitter /></li>
                    <li className=' text-4xl'><FaInstagram /></li>
                    <li className=' text-4xl'><FaGithub /></li>
                    <li className='sm:ml-8 border border-first-color border-2 px-4 py-2 text-2xl rounded-full'><p>Email me</p></li>
                </ul>
            </div>
}

export default ContactMe