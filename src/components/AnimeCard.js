import React from 'react'
import { Link } from 'react-router-dom'

import './AnimeCard.css'

export default function AnimeCard(props) {
  return (
    <div className='m-2 d-flex img-thumbnail'>
      <div className='img-wrapper'>
        <img
          className='cover-image'
          src={props.anime.image_url}
          alt={props.anime.title}
        />

        <div className='info'>
          <strong>Rank: </strong>
          {props.anime.rank}
          <br />
          <h4 className='title'>{props.anime.title}</h4>

          {props.cardType !== 'characters' && (
            <strong>Score: {props.anime.score}</strong>
          )}

          <div className=''>
            {props.cardType === 'anime' && (
              <Link className='text-white' to={`/${props.anime.mal_id}`}>
                view detail
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
