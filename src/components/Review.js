import { Link } from 'react-router-dom';

function Review({ review }) {
  
  return <>
    <div>
      <Link to={`/review/${review.id}`}>
        {/*<img src={review.image }></img>*/}
      </Link>
        <h4>{review.title_of_work}</h4>
        <h4>{review.artist}</h4>
        <h4>{review.review}</h4>
      
    </div>
  </>
}
export default Review;