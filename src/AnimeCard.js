import React from 'react'
export default function AnimeCard(props) {
  const styles = {
    maxWidth: '300px'
  }
  return (
    <div className="card mt-2 col-lg-6 d-flex">
      <div className="card-body d-flex">
        <img style={styles} src={props.anime.image_url} alt={props.anime.title} />
        <div className="ml-3">
          <h3>{props.anime.title}</h3>
          <div className="">
            <strong>Rank: </strong>{props.anime.rank}<br />
            <strong>Score: </strong> {props.anime.score}
          </div>
        </div>
      </div>
    </div>
  )
}