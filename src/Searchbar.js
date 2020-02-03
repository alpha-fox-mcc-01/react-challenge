import React, { useState } from 'react'

export default function Searchbar(props) {
  const [keyword, setKeyword] = useState('')

  const handleChange = (event) => {
    setKeyword(event.target.value)
    props.searchByKeyword(event.target.value)
  }

  return (
    <div>
      <form>
      <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      type="search" value={keyword} onChange={ (event) => handleChange(event)} name="search" placeholder="Find out the synopsis"></input>
      </form>
    </div>
  )

}

