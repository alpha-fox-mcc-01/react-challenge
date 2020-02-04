import React, { Component } from 'react'
import ListItems from './ListItems'

export class ListContainer extends Component {
  render() {
    return (
      <div className="flex mb-4 flex-wrap">
          {this.props.films.map( film => {
          return <ListItems film={film} key={film.id}  /> } )}
      </div>
    )
  }
}

export default ListContainer
