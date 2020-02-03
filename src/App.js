import React, { useState, useEffect } from 'react';
import './App.css';
import ListContainer from './ListContainer'
import instance from './helpers/axiosinstance'
import Searchbar from './Searchbar'
import imageList from './helpers/images'

function App() {
  const [films, setFilms] = useState([])
  const [result, setResult] = useState([])
  const [images, setImages] = useState([])
  useEffect(() => {
    instance.get('/films')
    .then(({ data }) => {
      setFilms(data)
      setImages(imageList)
    
    })
    .catch(err => {
      console.log(err)
    })
  }) 
  const searchByKeyword = (keyword) => {
    console.log('searchbykeyword invoked', keyword)
    const searchResult = films.filter (film => {
     return film.title.toLowerCase() === keyword.toLowerCase()
    })
     console.log(searchResult)
     searchResult.length > 0 ? setResult(searchResult) : setResult([])
  }

  const styles = {
    fontSize: 'x-large'
  }
  return (
      <div className="App">
        <h1 style={styles}>Welcome to List of Ghibli Films</h1>
        <Searchbar searchByKeyword={searchByKeyword}></Searchbar> 
        {result.length > 0 ? <ListContainer films={result} /> :  <ListContainer films={films} />}
      </div>
  )
  
}

export default App;
