import { Link, useLoaderData, Form} from 'react-router-dom';

function Show(props) {
  const review = useLoaderData();
  return <>
    <div className="show">
        <img src={review.image} alt="A work of art"></img>
        <h4>{review.title_of_work}</h4>
        <h4>{review.artist}</h4>
        <p>{review.review}</p> 
      <h2>Update Review</h2>
      <Form className="updateForm" method="post" action={`/update/${review.id}`}>
        <input className="update" type="text" name="image" placeholder="Image" defaultValue={review.image} />
        <input className="update" type="text" name="title_of_work" placeholder="Title of work" defaultValue={review.title_of_work} />
        <input className="update" type="text" name="artist" placeholder="Artist" defaultValue={review.artist} />
        <input className="update" type="text" name="review" placeholder="Review" defaultValue={review.review} />
        <button className="updateBtn">Update the Record</button>
      </Form>
      <Form method="post" action={`/delete/${review.id}`}>
        <button className="delete">Take Off the Record</button>
      </Form>
      <Link className="link" to="/">Back to Index</Link>
    </div>
  </>
}

export default Show