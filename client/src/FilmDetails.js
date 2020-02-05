import React, { useState, useEffect } from 'react'
import {  useParams, Link } from "react-router-dom"
import useFetcher from './useFetcher'
import imageList from './helpers/images'
import FilmReview from './FilmReview'


export function FilmDetails(props) {
  const { id } = useParams()
  const { loading, details, error } = useFetcher('/films/' + id)
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
     width: '24px',
     height: '24px',
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

   if (loading) return <img style={loadGif} src="https://avatarfiles.alphacoders.com/890/89063.gif" alt="jumpingtoto" />
   if (error) return <p>Oops... An Error Occured</p>

   const iconStyle = {
    fontSize: '48px',
    color: 'white'
   }
  return (
    <>
    <div style={container} className="w-2/3 flex-wrap"> 
      <div style={upperStyles} className="flex flex-wrap bg-white shadow">
        <Link to="/">
          <i style={iconStyle} class="material-icons md-48 md-light">
          arrow_back
          </i>
        </Link>
        <div style={descContainer} className="w-2/3">
          <h1 style={titleStyles}>{details.title} ({details.release_date})</h1>
          <p style={fonts}>Directed by {details.director}</p><br/>
        </div>
        <div style={descContainer} className="w-1/3 flex-wrap rating">
          <img style={tomatoStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png" alt="rottentomato" /> 
          <p style={rating}>{details.rt_score}%</p> 
          <p style={fonts}>Tomatometer</p>
        </div>
      </div>
      <div className="flex mb-4 flex-wrap">
        <div style={descContainer} className="w-1/4">
          { details.title ? imageList.map( image => {
                if (image.title.toLowerCase() === details.title.toLowerCase()) {
                  return <img className="w-full" style={imageStyle} src={image.url} alt='filmposter' key={image.title} />
          }}) : '' }
        </div>
        <div style={descContainer} className="w-3/4">
          <iframe className="w-full" width="477" height="268" src="https://www.youtube.com/embed/8ykEy-yPBFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div>
        <div style={descContainer}  className="w-full">
          <p>{details.description}</p>
        </div>
      </div>
      <div className="py-6">
        <FilmReview id={details.id}></FilmReview>
      </div>
    </div>
    </>
  )
}

export default FilmDetails
