import { useRouter } from 'next/router'
import useSWR from 'swr'

import { recs } from '../../../../recs'

import Places from '../../../../components/Places'

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
    () => (query.country, query.city, query.stateCity) && `/api/${query.country}/${query.city}/${query.stateCity}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>hi</h1>
      <div>
        {data.places.map((p, i) => (
            <Places key={i} name={p.name} description={p.description} photo={p.photo} address={p.address} category={p.category} tags={p.tags} />
          ))}
      </div>

    </div>
  )
}
