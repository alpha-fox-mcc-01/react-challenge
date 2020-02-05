import React, { useState } from 'react'
import Searchbar from './Searchbar'
import ListContainer from './ListContainer'
import useFetcher from './useFetcher'

export function Home(props) {
   
  const [result, setResult] = useState([])
  const { loading, data, error } = useFetcher('/films')

  const searchByKeyword = (keyword) => {
    const searchResult = data.filter (film => {
     return film.title.toLowerCase() === keyword.toLowerCase()
    })
     searchResult.length > 0 ? setResult(searchResult) : setResult([])
  }

  const logoStyle = {
    alignItems: 'center',
    justifyContent: 'center'
  }
  const imageStyle = {
    width: '350px',
    height: '100%'
  }

  const loadGif = {
    margin: '0 auto',
    width: '200px',
    height: '200px'
  }

  if (loading) return <img style={loadGif} src="https://avatarfiles.alphacoders.com/890/89063.gif" alt="jumpingtoto" />
  if (error) return <p>Oops... An Error Occured</p>
  return (
    < >
    <div style={logoStyle} className="flex flex-wrap">
      <img style={imageStyle} src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" alt="logo" />
    </div>
      <Searchbar searchByKeyword={searchByKeyword}></Searchbar> 
      {result.length > 0 ? <ListContainer films={result} /> :  <ListContainer films={data} />}
    </>
  )
    
}

export default Home
