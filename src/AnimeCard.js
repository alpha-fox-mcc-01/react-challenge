import React from 'react'

class AnimeCard extends React.Component {
  render() {
    return (
      <div className="card m-2">
        <div className="card-body d-flex flex-column">
          <img src={this.props.anime.image_url} alt="" width="200" />
          <h3>{this.props.anime.title}</h3>
          <div className="">
            <strong>Rank: </strong>{this.props.anime.rank}<br />
            <strong>Score: </strong> {this.props.anime.score}
          </div>
        </div>
      </div>
    )
  }
}

export default AnimeCard