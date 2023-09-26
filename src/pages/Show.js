import { Link, useLoaderData } from 'react-router-dom';

function Show(props) {
  const review = useLoaderData();
  return <>
    <div>
      <img src={review.image}></img>
      <h4>{review.title_of_work}</h4>
      <h4>{review.artist}</h4>
      <p>{review.review}</p>
      <Link to="/">Back to Index</Link>
    </div>
  </>
}

export default Show