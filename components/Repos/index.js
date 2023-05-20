import React from 'react'
import Repo from './Repo'

const index = ({user, repos}) => {

  return (
    <section className='mt-16'>
        <div>
        <h2 className='md:text-6xl sm:text-4xl text-3xl font-bold'>Tech Contributions</h2>
        <p className=' text-first-color mt-2 ml-1 '>
          Stats: Repositories: {user.public_repos} / Followers: {user.followers} / Stars: {user.public_gists}
        </p>
        </div>
        <ul className='mt-8'>
            {repos.map(Repo)}
        </ul>
            
    </section>
  )
}

export default index