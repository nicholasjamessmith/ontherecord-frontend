import Review from '../components/Review';
import { useLoaderData, Form } from 'react-router-dom';

function Index(props) {
  const reviews = useLoaderData()
  return <>
    <h1>On The Record__!</h1>
    <h1>Hello, World!</h1>
    <h2>Review Something...</h2>
    {/*<div className="form">*/}
    <Form method="post" action="/create">
      <input className="input" type="text" name="image" placeholder="Image link" />
      <input className="input" type="text" name="title_of_work" placeholder="Title of work" />
      <input className="input" type="text" name="artist" placeholder="Artist" />
      <input className="input" type="text" name="review" placeholder="Review" />
      <button className="input" id="submitBtn">Submit Review</button>
    </Form>
    {/*</div>*/}
    {reviews.map((review) => <Review key={review.id} review={review} />)}
  </>
}
export default Index