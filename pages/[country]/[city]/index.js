import { useRouter } from 'next/router'
import useSWR from 'swr'

import Header from '../../../components/Header'
import Places from '../../../components/Places'
import StateCities from '../../../components/StateCities'
import SimpleMap from '../../../components/SimpleMap'

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
    () => (query.country, query.city) && `/api/${query.country}/${query.city}`,
    fetcher
  )

  let USA = (query.country == 'United States')


  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Header />
      <div className="titleWrapper">
        <h1 className="countryStateTitle">{USA ? data.stateName : data.cityName}</h1>
      </div>

      <div className="two-column-map">
        <div className="map-column">
          <SimpleMap mapData={USA ?
              data.city
              :
              data.places
            }
            />
        </div>
        <div className="map-column">
          <ul className={USA ? "usa-wrapper degular-text-bold-italic" : "city-wrapper"}>
            {USA ?
              data.city.map((p, i) => (
                <StateCities key={i} country={query.country} city={p.cityName} state={data.stateName} />
              ))
              :
              data.places.map((p, i) => (
                <Places key={i} name={p.name} description={p.description} photo={p.photo} address={p.address} category={p.category} tags={p.tags} />
              ))
            }
          </ul>
        </div>

      </div>
    </div>

  )
}
