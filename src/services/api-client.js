const base_url = 'https://www.googleapis.com/books/v1/'

async function fetchBooks (query) {
  try {
    const response = await fetch (`${base_url}volumes?q=${query}`)
    if(!response.ok) {
      throw new Error(`api call faild: ${response.status}`);
    }
    const data = await response.json()
    return data.items || []
  } catch (error) {
    if(error.name ==='AbortError') {
      console.log('Fetch aborted')
    }
    else {
      console.error('Error fetching books::', error.message)
    }
  }
}
export default fetchBooks;