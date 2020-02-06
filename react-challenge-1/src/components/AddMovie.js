import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { requestAddMovie } from "../store/actions";

export default function AddMovie(props) {
  const dispatch = useDispatch();
  const titleNotFound = useSelector(state => state.titleNotFound);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (titleNotFound) {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "Movie not found"
      });
    }
  }, [titleNotFound]);

  const addMovie = title => {
    const searchParam = title.replace(/\s/, "");
    dispatch(requestAddMovie(searchParam));
  };

  const onSubmit = e => {
    e.preventDefault();
    addMovie(title);
    setTitle("");
  };

  const onTitleChange = e => setTitle(e.target.value);

  return (
    <form className="col-8 offset-2" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title" className="text-white">
          Movie Title
        </label>
        <input
          className="form-control"
          type="text"
          name="title"
          id="title"
          placeholder="Add Movie"
          value={title}
          onChange={onTitleChange}
        />
      </div>
      <input type="submit" value="Add Movie" className="btn btn-danger" />
    </form>
  );
}
