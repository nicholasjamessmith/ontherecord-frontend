import Review from '../components/Review';
import { useLoaderData, Form } from 'react-router-dom';

function Index(props) {
  const reviews = useLoaderData()
  return <>
    <h1>On The Record__!</h1>
    <h2>Review Something...</h2>
    <Form method="post" action="/create">
      <input type="text" name="image" placeholder="Image link" />
      <input type="text" name="title_of_work" placeholder="Title of work" />
      <input type="text" name="artist" placeholder="Artist" />
      <input type="text" name="review" placeholder="Review" />
      <button>Submit Review__.</button>
    </Form>
    {reviews.map((review) => <Review key={review.id} review={review} />)}
  </>
}
export default Index