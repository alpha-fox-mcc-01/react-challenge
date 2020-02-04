import React, {useState, useEffect} from 'react'
import './filmreviewstyle.css'
import instanceServer from './helpers/axiosServer'

export function FilmReview(props) {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null)
  const [newReview, setNewReview] = useState('')
  const [newUser, setnewUser] = useState('')
  useEffect(() => {
    instanceServer.get('/reviews')
                  .then(({ data }) => {
                    setReviews(data)
                  })
                  .catch(err => {
                    setError(err.response.body)
                  })
  }, [])

  return (
    <div id="box" className="flex mb-4 flex-wrap">
      <div id="reviews" className="w-1/2">
      <h2>User Reviews</h2>
        <div id="reviewItem">
          { reviews.map(review => {
            if (review.filmId === props.id) {
            return (
              <div key={review.id}>
                <p>{review.name}: {review.review}</p>
              </div>
            )
            } 
          })}
        </div>
      </div>
      <div className="w-1/2">
        <form>
          <input type="text" placeholder="your name..." />
          <div>
            <input type="text" placeholder="type in your review..."/>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

export default FilmReview
