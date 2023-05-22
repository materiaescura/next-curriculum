import React from 'react'
import Hero from '../components/Hero'
import Repos from '../components/Repos'
import Footer from '../components/Footer'
import Separtor from '../components/Separtor'

const App = ({user, repos}) => {
   return (
    <div className='container mx-auto px-4'>
        <Hero />
        <Separtor />
        <Repos user={user} repos={repos} />
        
        <Footer />
    </div>
   )
}

export async function getServerSideProps(context) {

    const request = await fetch(process.env.API_URL+'/api/getUser')
    const {repos, user} = await request.json()
    return {
        props: {
            repos,
            user
        }
    }
}

export default App