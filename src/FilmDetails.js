import React, { useState } from 'react'
import {  useParams } from "react-router-dom"
import useFetcher from './useFetcher'
import imageList from './helpers/images'

export function FilmDetails(props) {
  const [images, setImages] = useState([])
  const { id } = useParams()
   const [loading, data, error] = useFetcher('/films/' + id)

   const upperStyles = {
     paddingLeft : '25px'
   }
   const titleStyles = {
     fontSize: 'xx-large'
   }

   const imageStyle = {
     width: '500px'
   }
   const descContainer = {
     justifyContent: 'center',
     padding: '2rem'
   }
  return (
    <div className="w-full"> 
    <div style={upperStyles} className="flex-col bg-white shadow">
    <h1 style={titleStyles}>{data.title}</h1>
    <p>By {data.director}</p><br/>
    <p>Release Date: {data.release_date}</p>
    </div>
    <div className="flex mb-4 flex-wrap">
      <div style={descContainer} className="w-1/2 h-12 flex">
        <img src="" alt="film-poster" />
      </div>
      <div style={descContainer} className="w-1/2 h-12">
      <p>{data.description}</p>
      </div>
    </div>
    </div>
  )
}

export default FilmDetails
