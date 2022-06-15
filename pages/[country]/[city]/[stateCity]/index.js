import { useRouter } from 'next/router'
import useSWR from 'swr'
import Header from '../../../../components/Header'
import Places from '../../../../components/Places'
import SimpleMap from '../../../../components/SimpleMap'



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

      <Header />
      <div className="titleWrapper">
        <h1 className="countryStateTitle">{query.stateCity}</h1>
      </div>
      <div className="two-column-map">
        <div className="map-column">
          <SimpleMap />
        </div>
        <div className="map-column">
          <div className="city-wrapper degular-text-bold-italic">
            {data.places.map((p, i) => (
              <Places key={i} name={p.name} description={p.description} photo={p.photo} address={p.address} category={p.category} tags={p.tags} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
