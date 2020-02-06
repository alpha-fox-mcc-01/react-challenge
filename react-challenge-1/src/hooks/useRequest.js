import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { requestMovies } from "../store/actions";

export default function useRequest(endpoint) {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    setLoading(true);
    dispatch(requestMovies());
  }, [endpoint]);

  const handlePost = (endpoint, body) => {
    axios
      .post("http://localhost:3000/" + endpoint, body)
      .then(({ data: newData }) => {
        setData([newData, ...data]);
      })
      .catch(console.log);
  };

  const handleDelete = (endpoint, id) => {
    axios
      .delete(`http://localhost:3000/${endpoint}/` + id)
      .then(function({ data: newData }) {
        const newMovies = data.filter(movie => movie.id !== id);
        setData(newMovies);
      })
      .catch(console.log);
  };

  return {
    loading,
    error,
    data,
    handlePost,
    handleDelete
  };
}
