import { useRouter } from 'next/router'
import useSWR from 'swr'

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

  console.log(query)

  // const { data, error } = useSWR(
  //   () => query.country && `/api/${query.country}`,
  //   fetcher
  // )

  // if (error) return <div>{error.message}</div>
  // if (!data) return <div>Loading...</div>


  return (
    <div>
      <h1>hi</h1>
      
    </div>
  )
}
