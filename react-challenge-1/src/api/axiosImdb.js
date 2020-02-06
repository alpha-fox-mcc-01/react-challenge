import axios from "axios";

export default axios.create({
  baseURL: "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/"
});
