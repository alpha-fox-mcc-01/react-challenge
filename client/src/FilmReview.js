import React, { useState, useEffect } from "react";
import "./filmreviewstyle.css";
import instanceServer from "./API/axiosServer";
import Swal from "sweetalert2";
export function FilmReview(props) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState("");
  const [newUser, setNewUser] = useState("");

  const postReview = event => {
    event.preventDefault();
    instanceServer
      .post("/reviews", {
        filmId: props.id,
        review: newReview,
        name: newUser
      })
      .then(_ => {
        setNewReview("");
        setNewUser("");
        Swal.fire("Yay!", "Your review is successfully posted!", "success");
      })
      .catch(err => {
        Swal.fire("Oops..", "An error occured", "error");
      });
  };

  const handleChangeUser = event => {
    setNewUser(event.target.value);
  };

  const handleChangeReview = event => {
    setNewReview(event.target.value);
  };

  useEffect(() => {
    instanceServer
      .get("/reviews")
      .then(({ data }) => {
        setReviews(data);
      })
      .catch(err => {
        setError(err.response.body);
      });
  }, [reviews]);

  return (
    <div id="box" className="flex mb-4 flex-wrap">
      <div id="reviews" className="w-1/2">
        <h2>User Reviews</h2>
        <div id="reviewItem">
          {reviews.map(review => {
            if (review.filmId === props.id) {
              return (
                <div key={review.id}>
                  <p className="text-left">
                    {review.name}: {review.review}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="w-1/2 max-w-xs">
        <form
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={postReview}
        >
          <div className="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              value={newUser}
              onChange={handleChangeUser}
              type="text"
              placeholder="your name..."
            />
          </div>
          <div className="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Review
            </label>
            <textarea
              value={newReview}
              onChange={handleChangeReview}
              class="resize-y border rounded focus:outline-none focus:shadow-outline"
            ></textarea>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilmReview;
