import useSWR from 'swr'
import Country from '../components/Country'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {

  const { data, error } = useSWR('/api', fetcher)
    // 1. this line is going into the api folder, and the people folder, it is using the index.js file in that folder to call the data structure that lives at the top level folder and returns the whole response. If it is good, it assigns that whole response to 'data'.

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  // return statement grabs data assigned by above and maps it, passing the data to the Person Component to render.
  console.log(data)
  return (
    <ul>
      <p>hello i am landing page</p>
      
      {data.map((p, i) => (
        <Country key={i} country={p} />
      ))}
    </ul>
  )
}
