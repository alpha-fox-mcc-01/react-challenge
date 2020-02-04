import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useRequest (endpoint) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/${endpoint}?_sort=id&_order=desc`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(({ response: { data } }) => {
        setError(data);
      });
  }, []);

  const handlePost = (endpoint, body) => {
    axios
    .post('http://localhost:3000/' + endpoint, body)
      .then(({ data: newData }) => {
        setData([newData, ...data]);
      })
      .catch(console.log);
  }

  const handleDelete = (endpoint, id) => {
    axios
      .delete(`http://localhost:3000/${endpoint}/` + id)
      .then(function({ data: newData }) {
        const newMovies = data.filter((movie) => movie.id !== id);
        setData(newMovies);
      })
      .catch(console.log);
  };

  return {
    loading,
    error,
    data,
    handlePost,
    handleDelete,
  };
};