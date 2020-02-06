import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestDeleteMovie } from "../store/actions";

export default function MovieCard(props) {
  const dispatch = useDispatch();
  let history = useHistory();

  const getStyle = rating => {
    let textColor = "text-success";
    if (rating < 7) {
      textColor = "text-danger";
    }
    return <span className={textColor}>{rating}</span>;
  };

  const showDetail = id => {
    history.push("/movies/" + id);
  };

  const deleteMovieCard = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can add this movie again later!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete movie!"
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted!", "Your movie has been deleted.", "success");
        dispatch(requestDeleteMovie(id));
      }
    });
  };

  const { id, title, year, length, rating, poster, plot } = props.movie;
  return (
    <div className="col-md-6 col-lg-4 mb-4 justify-content-center">
      <div className="movie-card rounded">
        <img className="movie-card-image" src={poster} alt="Movie Poster" />
        <div className="movie-card-description">
          <h4 className="card-title">
            <strong>{title}</strong>
          </h4>
          <h6 className="card-subtitle mb-2 text-warning">{year}</h6>
          <p className="card-text">{plot}</p>
          <p className="card-text">Length: {length}</p>
          <h5 className="card-text">Rating: {getStyle(rating)}</h5>
          <button
            className="btn-sm btn-primary btn-del mt-3"
            onClick={() => showDetail(id)}
          >
            Detail
          </button>
          <button
            className="btn-sm btn-danger btn-del mt-3"
            onClick={() => deleteMovieCard(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
