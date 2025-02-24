import Review from '../components/Review';
import { useLoaderData, Form } from 'react-router-dom';

function Index(props) {
  const reviews = useLoaderData()
  return <>
    <h1>On The Record</h1>
    <h2>Review Something...</h2>
    <Form method="post" action="/create">
      <input className="input" type="text" name="image" placeholder="Image link" />
      <input className="input" type="text" name="title_of_work" placeholder="Title of work" />
      <input className="input" type="text" name="artist" placeholder="Artist" />
      <input className="input" type="text" name="review" placeholder="Review" />
      <button className="input" id="submitBtn">Submit Review</button>
    </Form>
    <div className="reviews-container">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  </>
}
export default Index