import React from 'react'

const Repo = ({id, full_name}) => {
  return (
    <li className='text-2xl  text-first-color mt-4 hover:underline' key={id}>
        <a href={`https://github.com/${full_name}`}>{full_name}</a>
    </li>
  )
}

export default Repo