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
     width: '100%',
     height: '268px',
     objectFit: 'fill',
   }
   const descContainer = {
     justifyContent: 'flex-start'
   }
   const tomatoStyle = {
     width: '48px',
     height: '48px',
     margin: '0 auto'
   }
   const container = {
     margin: '0 auto'
   }

   const loadGif = {
     margin: '0 auto',
     width: '200px',
     height: '200px'
   }

   const rating = {
    fontSize: 'x-large',
    color: 'white'
   }
   const fonts = {
     color: 'white',
     margin: '0 auto'
   }
   const video = {
   }

   if (loading) return <img style={loadGif} src="https://avatarfiles.alphacoders.com/890/89063.gif" alt="jumpingtoto" />
   if (error) return <p>Oops... An Error Occured</p>
  return (
    <div style={container} className="w-2/3 flex-wrap"> 
      <div style={upperStyles} className="flex flex-wrap bg-white shadow">
        <div style={descContainer} className="w-2/3">
          <h1 style={titleStyles}>{data.title} ({data.release_date})</h1>
          <p style={fonts}>Directed by {data.director}</p><br/>
        </div>
        <div  style={descContainer} className="w-1/3 rating">
          <img style={tomatoStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png" alt="rottentomato" /> 
          <p style={rating}>{data.rt_score}%</p> 
          <p style={fonts}>Tomatometer</p>
        </div>
      </div>
      <div className="flex mb-4 flex-wrap">
        <div style={descContainer} className="w-1/4">
          { data.title ? imageList.map( image => {
                if (image.title.toLowerCase() === data.title.toLowerCase()) {
                  return <img className="w-full" style={imageStyle} src={image.url} alt='filmposter' key={image.title} />
          }}) : '' }
        </div>
        <div style={descContainer} className="w-3/4">
          <iframe className="w-full" style={video} width="477" height="268" src="https://www.youtube.com/embed/8ykEy-yPBFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div>
        <div style={descContainer}  className="w-full">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FilmDetails
