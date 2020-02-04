import React, { useState, useEffect } from 'react'
import {  useParams } from "react-router-dom"
import useFetcher from './useFetcher'
import imageList from './helpers/images'
import { white } from 'color-name'

export function FilmDetails(props) {
  const { id } = useParams()
  const [loading, data, error] = useFetcher('/films/' + id)
  console.log(imageList, 'ini imagelist')
   const upperStyles = {
     paddingLeft : '25px',
     backgroundColor: '#333'
   }
   const titleStyles = {
     fontSize: 'xx-large',
     color: 'white',
   }

   const imageStyle = {
     width: '500px',
     maxHeight: '100%'
   }
   const descContainer = {
     justifyContent: 'center',
     padding: '2rem'
   }
   const tomatoStyle = {
     width: '48px',
     height: '48px',
     margin: '0 auto'
   }
   const container = {
     margin: '0 auto'
   }

   const rating = {
    fontSize: 'x-large',
    color: 'white'
   }

   if (loading) return <p>Loading....</p>
   if (error) return <p>Oops... An Error Occured</p>
  return (
    <div style={container} className="w-2/3 relative"> 
    <div style={upperStyles} className="flex-col bg-white shadow">
    <h1 style={titleStyles}>{data.title} ({data.release_date})</h1>
    <p>Directed by {data.director}</p><br/>
    <div className="rating">
    <img style={tomatoStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png" alt="rottentomato" /> 
    <p style={rating}>{data.rt_score}%</p> 
    </div>
    <p>Tomatometer</p>
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
      <iframe width="280" height="175" src="https://www.youtube.com/embed/8ykEy-yPBFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  )
}

export default FilmDetails
