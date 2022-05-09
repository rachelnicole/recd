import { useRouter } from 'next/router'
import useSWR from 'swr'

import Cities from '../../components/Cities'
import States from '../../components/States'
import Header from '../../components/Header'

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

  const USA = data.state;

  return (
    <div>
      <Header />
      <div className="titleWrapper">
        <h1 className="countryStateTitle">{data.country}</h1>
      </div>
      <ul className="cityStateList degular-text-bold-italic">
        {USA ?
          (data.state.map((p, i) => (
            <States key={i} city={p.stateName} country={data.country} />
          ))) :
          (data.city.map((p, i) => (
            <Cities key={i} city={p.cityName} country={data.country} />
          )))
        }</ul>
    </div>
  )
}
