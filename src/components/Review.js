import { Link } from 'react-router-dom';

function Review({ review }) {
  
  return <>
    <div className="box">
      <div className="review">
        <Link to={`/review/${review.id}`}>
          <img src={review.image} alt="Cover Art"></img>
          <h4>{review.title_of_work} - {review.artist}</h4>
        </Link>
          {/*<h4>{review.review}</h4>*/}
      </div>
    </div>  
  </>
}
export default Review;