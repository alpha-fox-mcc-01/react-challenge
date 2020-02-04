import React, { useState, useEffect } from 'react'
import {  useParams } from "react-router-dom"
import useFetcher from './useFetcher'
import imageList from './helpers/images'

export function FilmDetails(props) {
  const { id } = useParams()
  const [loading, data, error] = useFetcher('/films/' + id)
  console.log(imageList, 'ini imagelist')
   const upperStyles = {
     paddingLeft : '25px'
   }
   const titleStyles = {
     fontSize: 'xx-large',
     backgroundImage: 'linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)'
   }

   const imageStyle = {
     width: '500px',
     maxHeight: '100%'
   }
   const descContainer = {
     justifyContent: 'center',
     padding: '2rem'
   }

   if (loading) return <p>Loading....</p>
   if (error) return <p>Oops... An Error Occured</p>
  return (
    <div className="w-full"> 
    <div style={upperStyles} className="flex-col bg-white shadow">
    <h1 style={titleStyles}>{data.title}</h1>
    <p>By {data.director}</p><br/>
    <p>Release Date: {data.release_date}</p>
    </div>
    <div className="flex mb-4 flex-wrap">
      <div style={descContainer} className="w-1/2 h-12 flex">
      { data.title ? imageList.map( image => {
            if (image.title.toLowerCase() === data.title.toLowerCase()) {
              return <img src={image.url} alt='filmposter' key={image.title} />
      }}) : '' }
      </div>
      <div style={descContainer} className="w-1/2 h-12">
      <p>{data.description}</p>
      </div>
    </div>
    </div>
  )
}

export default FilmDetails
