import { Link } from 'react-router-dom';

function Review({ review }) {
  
  return <>
      <div className="review">
        <Link className="review-inner" to={`/review/${review.id}`}>
          <img className="review-img" src={review.image} alt="Cover Art"></img>
          <h4 className="review-details">{review.title_of_work} - {review.artist}</h4>
        </Link>
          {/*<h4>{review.review}</h4>*/}
      </div>
  </>
}
export default Review;