import React, { useState, useEffect } from "react";
import imageList from "./resources/images";
import "./listItemStyles.css";
import { useHistory } from "react-router-dom";

export function ListItems(props) {
  const [images, setImages] = useState([]);
  let history = useHistory();

  const RouteChange = params => {
    let path = "/details/" + params;
    history.push(path);
  };

  useEffect(() => {
    setImages(imageList);
  }, []);

  const styles = {
    margin: "0 auto",
    padding: "1rem"
  };
  return (
    <div
      id="film-card"
      className="max-w-xs rounded shadow-lg my-2"
      style={styles}
    >
      <div className="img-container">
        {images.map(image => {
          if (image.title.toLowerCase() === props.film.title.toLowerCase()) {
            return <img src={image.url} alt="filmposter" key={image} />;
          }
        })}
        <div id="film-description" className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.film.title}</div>
          <p className="text-grey-darker text-base">
            Director:
            {props.film.director}
          </p>
          <p className="text-grey-darker text-base">
            Release Date:
            {props.film.release_date}
          </p>
          <button
            onClick={() => RouteChange(props.film.id)}
            className="bg-transparent hover:bg-yellow-500 text-grey-400 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItems;
