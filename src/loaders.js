import url from './url'

export const indexLoader = async () => {
  const response = await fetch(url)
  const reviews = await response.json()
  return reviews
}

export const showLoader = async ({ params }) => {
  const id = params.id
  const response = await fetch(url + id)
  const review = await response.json()
  return review
}