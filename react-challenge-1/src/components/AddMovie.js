import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

// export class AddMovie extends Component {
//   state = {
//     title: '',
//   }

  // addMovie(title) {
  //   const searchParam = title.replace(/\s/, '');
  //   axios
  //   .get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${searchParam}`, {
  //     "headers":{
  //       "content-type":"application/octet-stream",
  //       "x-rapidapi-host":"imdb-internet-movie-database-unofficial.p.rapidapi.com",
  //       "x-rapidapi-key":"5b5732de93msh3cd2ea93eda46cap17bbc4jsn3de9c6dab431"
  //     }
  //   })
  //     .then(({ data }) => {
  //       if (!data.year) {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Sorry...',
  //           text: 'Movie not found',
  //         });
  //       } else {
  //         this.props.postMovie(data);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   this.addMovie(this.state.title);
  //   this.setState({
  //     title: '',
  //   });
  // }

  // onChange = (e) => this.setState({
  //   [e.target.name]: e.target.value,
  // });

//   render() {
    // return (
    //   <form
    //     className="addMovieForm"
    //     onSubmit={ this.onSubmit }
    //   >
    //   <div className="form-group">
    //     <label htmlFor="title" className="text-white">Movie Title</label>
    //     <input
    //       className="form-control"
    //       type="text"
    //       name="title"
    //       id="title"
    //       placeholder="Add Movie"
    //       value={ this.state.title }
    //       onChange={ this.onChange }
    //     />
    //   </div>
    //   <input
    //     type="submit"
    //     value="Add Movie"
    //     className="btn btn-danger"
    //   />
    //   </form>
    // )
//   }
// }

// export default AddMovie;

export default function AddMovie(props) {
  const [title, setTitle] = useState('');

  const addMovie = (title) => {
    const searchParam = title.replace(/\s/, '');
    axios
    .get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${searchParam}`, {
      "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key":"5b5732de93msh3cd2ea93eda46cap17bbc4jsn3de9c6dab431"
      }
    })
      .then(({ data }) => {
        const { id, title, year, length, rating, poster, plot } = data;
        if (!year) {
          Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'Movie not found',
          });
        } else {
          props.save('movies', { id, title, year, length, rating, poster, plot, createdAt: new Date() });
        }
      })
      .catch(console.log);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addMovie(title);
    setTitle('');
  }

  const onChange = (e) => setTitle(e.target.value);

  return (
    <form
      className="col-8 offset-2"
      onSubmit={ onSubmit }
    >
    <div className="form-group">
      <label htmlFor="title" className="text-white">Movie Title</label>
      <input
        className="form-control"
        type="text"
        name="title"
        id="title"
        placeholder="Add Movie"
        value={ title }
        onChange={ onChange }
      />
    </div>
    <input
      type="submit"
      value="Add Movie"
      className="btn btn-danger"
    />
    </form>
  );
};
