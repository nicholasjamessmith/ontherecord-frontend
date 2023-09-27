import url from './url';
import { redirect } from 'react-router-dom'

export const createAction = async({ request }) => {
  const formData = await request.formData();
  const newReview = {
    image: formData.get("image"),
    title_of_work: formData.get("title_of_work"),
    artist: formData.get("artist"),
    review: formData.get("review"),
  }
  
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newReview)
  })
  return redirect("/")
}

export const updateAction = async ({ request, params }) => {
  const id = params.id
  const formData = await request.formData();
  const updatedReview = {
    image: formData.get("image"),
    title_of_work: formData.get("title_of_work"),
    artist: formData.get("artist"),
    review: formData.get("review"),
  }
  await fetch(url + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedReview)
  })
  return redirect (`/review/${id}`)
}

export const deleteAction = async ({ params }) => {
  const id = params.id
  await fetch(url + id, {
    method: "delete"
  })
  return redirect("/")
}