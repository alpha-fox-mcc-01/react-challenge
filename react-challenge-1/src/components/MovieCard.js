import React from 'react';

export default function MovieCard(props) {
  const getStyle = (rating) => {
    let textColor = 'text-success';
    if (rating < 7) {
      textColor = 'text-danger';
    }
    return <span className={ textColor }>{ rating }</span>
  }

  const { id, title, year, length, rating, poster, plot } = props.movie;
  return (
    <div className="col-md-6 col-lg-4 mb-4 justify-content-center">
      <div className="movie-card h-100 shadow rounded">
        <img className="movie-card-image" src={ poster } alt="Movie Poster"/>
        <div className="movie-card-description">
          <h4 className="card-title"><strong>{ title }</strong></h4>
          <h6 className="card-subtitle mb-2 text-warning">{ year }</h6>
          <p className="card-text">{ plot }</p>
          <p className="card-text">Length: { length }</p>
          <h5 className="card-text">Rating: { getStyle(rating) }</h5>
          <button
            className="btn-sm btn-danger btn-del mt-3"
            onClick={() => props.deleteMovie(id) }
          >Delete</button>
        </div>
      </div>
    </div>
  );
};

// export class MovieCard extends Component {
//   getStyle(rating) {
//     let textColor = 'text-success';
//     if (rating < 7) {
//       textColor = 'text-danger';
//     }
//     return <span className={ textColor }>{ rating }</span>
//   }

//   render() {
//     const { title, year, length, rating, poster, plot } = this.props.movie;
//     return (
//       <div className="col-md-6 col-lg-4 mb-4 justify-content-center">
//         <div className="movie-card h-100 shadow rounded">
//           <img className="movie-card-image" src={ poster } alt="Movie Poster"/>
//           <div className="movie-card-description">
//             <h5 className="card-title"><strong>{ title }</strong></h5>
//             <h6 className="card-subtitle mb-2 text-warning">{ year }</h6>
//             <p className="card-text">{ plot }</p>
//             <p className="card-text">Length: { length }</p>
//             <p className="card-text">Rating: { this.getStyle(rating) }</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default MovieCard;
