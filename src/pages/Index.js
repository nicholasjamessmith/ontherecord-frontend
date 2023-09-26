import Review from '../components/Review';
import { useLoaderData } from 'react-router-dom';

function Index(props) {
  const reviews = useLoaderData()
  return <>
    {reviews.map((review) => <Review key={review.id} review={review} />)}
  </>
}
export default Index