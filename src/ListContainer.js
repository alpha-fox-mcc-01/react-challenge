import React, { Component } from 'react'
import ListItems from './ListItems'

export class ListContainer extends Component {
  render() {

    const styles = {
      padding: '1rem'
    }
    return (
      <div style={styles} className="flex mb-4 flex-wrap">
          {this.props.films.map( film => {
          return <ListItems film={film} key={film.id}  /> } )}
      </div>
    )
  }
}

export default ListContainer
