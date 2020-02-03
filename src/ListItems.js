import React, { Component } from 'react'

export class ListItems extends Component {

  render() {
    const styles = {
      margin: '0 auto'
    }
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2" style={styles}>
      <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{JSON.stringify(this.props.film.title)}</div>
          <p className="text-grey-darker text-base">
            Director:
          {JSON.stringify(this.props.film.director)}
          </p>
          <p className="text-grey-darker text-base">
            Release Date:
          {JSON.stringify(this.props.film.release_date)}
          </p>
          <p className="text-grey-darker text-base">
            Synopsis:
          {JSON.stringify(this.props.film.description.slice(0, 70))} . . .
          </p>
      </div>
      </div>
    )
  }
}



export default ListItems
