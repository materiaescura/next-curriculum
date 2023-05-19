import React from 'react'
import ContactMe from './ContactMe'
import AboutMe from './AboutMe'
import Title from './Title'

const Hero = () => {
    return (
       
            <section className='mt-8'>
                <Title />
                <AboutMe />
                <ContactMe />
                {/* <div className='qualquer mt-16'></div> */}
            </section>
    )
}

export default Hero