import React, { useState } from 'react'
export default function SearchBar(props) {
  let [keyword, setKeyword] = useState('')

  const search = (word) => {
    setKeyword(keyword = word)
    props.searchAnime(word)
  }

  return (
    <div className="card my-3">
      <div className="card-body">
        <form>
          <div className="form-row">
            <input onChange={(event) => search(event.target.value)} value={keyword} type="text" className="form-control" placeholder="search" ></input>
          </div>
        </form>
      </div>
    </div>
  )
}