import React from 'react'
import Hero from '../components/Hero'
import Repos from '../components/Repos'
import gitHubCurriculum from '../utils/gitHubCurriculum'
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

    const {repos, user} = await gitHubCurriculum({
        username: 'materiaescura',
        hiddenRepositories:['materiaescura']
    })
   
    return {
        props: {
            repos,
            user
        }
    }
}

export default App