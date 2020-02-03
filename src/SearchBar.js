import React, { Component } from 'react'

export class SearchBar extends Component {
    state = {
        keyword: ''
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="exampleInputKeyword1">Search For Your Pokemon!</label>
                    <input type="text" value={ this.state.keyword } onChange={this.handleChange} className="form-control" id    ="exampleInputKeyword1" aria-describedby="KeywordHelp" placeholder="Enter Keyword" /><br />
                    <input type="submit" value='Search!' className="btn btn-primary" />
                </div>
            </form>
        )
    }
    
    handleChange = (event) => {
        this.setState({keyword: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getPokemon(this.state.keyword)
    }
}

export default SearchBar
