import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../components/Loading';
import NoMatch from '../components/NoMatch';

export default function MovieDetail() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [routeFound, setRouteFound] = useState(true);
  const { id } = useParams();

  const getStyle = (rating) => {
    let textColor = 'text-success';
    if (rating < 7) {
      textColor = 'text-danger';
    }
    return <span className={ textColor }>{ rating }</span>
  }

  useEffect(() => {
    setLoading(true);
    setRouteFound(false);
    axios
      .get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`, {
        "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"imdb-internet-movie-database-unofficial.p.rapidapi.com",
          "x-rapidapi-key":"5b5732de93msh3cd2ea93eda46cap17bbc4jsn3de9c6dab431"
        }
      })
      .then(({ data }) => {
        console.log(data);
        if (!data.year) {
          setRouteFound(true);
        }
        setMovie(data);
        setLoading(false);
      })
      .catch(({ response: { data } }) => {
        setError(data);
      });
  }, [id]);

  if (loading) return <Loading />
  if (error) return <p className="text-center mt-5">Error...</p>
  if (routeFound) return <NoMatch />

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-4">
            <img className="detail-image" src={ movie.poster } alt="Movie Poster"/>
          </div>
          <div className="col-md-6 p-4">
            <h1>{ movie.title }</h1>
            <p>Release date: { movie.year }</p>
            <h4 className="text-red">Plot</h4>
            <p>{ movie.plot }</p>
            <p className="lead">Rating: { getStyle(movie.rating)}</p>
            <p>Length: { movie.length }</p>
            <a className="btn btn-danger mb-3" href={ movie.trailer?.link } target="_blank" rel="noopener noreferrer">Watch trailer</a>
            <h4 className="mt-3 text-red">Casts</h4>
            <div className="row">
              {movie.cast?.map((actor, index) => {
                return (
                  <div className="col-6" key={ index }>
                    <h5>{ actor.actor }</h5>
                    <h6 className="mb-2 text-muted">{ actor.character }</h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};
