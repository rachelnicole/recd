import { useRouter } from 'next/router'
import useSWR from 'swr'
import Cities from '../../components/Cities'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Index() {
  const { query } = useRouter()
  
  const { data, error } = useSWR(
    () => query.country && `/api/${query.country}`,
    fetcher
  )  

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>


  return (
    <div>
      <h1>{data.country}</h1>
      {data.city.map((p, i) => (
        <Cities key={i} cityName={p} />
      ))}
    </div>
  )
}
