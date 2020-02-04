import React, { useState } from 'react';
import './App.css';
import ListContainer from './ListContainer'
import Searchbar from './Searchbar'
import useFetcher from './useFetcher'
import Spinner from 'react-spinkit'

function App() {

  const [result, setResult] = useState([])
  const [loading, data, error] = useFetcher()

  const searchByKeyword = (keyword) => {
    const searchResult = data.filter (film => {
     return film.title.toLowerCase() === keyword.toLowerCase()
    })
     searchResult.length > 0 ? setResult(searchResult) : setResult([])
  }

  const styles = {
    fontSize: 'x-large'
  }
  
  if (loading) return <p>Loading....</p>
  if (error) return <p>Oops... An Error Occured</p>
  return (
    <div className="App">
        <h1 style={styles}>Welcome to List of Ghibli Films</h1>
        <Searchbar searchByKeyword={searchByKeyword}></Searchbar> 
        {result.length > 0 ? <ListContainer films={result} /> :  <ListContainer films={data} />}
      </div>
  )
  
}

export default App;
