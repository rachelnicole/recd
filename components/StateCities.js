import Link from 'next/link'

export default function StateCities({ country, city, state }) {
  
  const stateCity = city;
  // gets passed in data from pages/index.js, renders as list and sets up api/people/[id] as link for displayed content.

  //in Link, /person/[id] is the api route, and person/${person.id} is the template literal

  return (
    <li>
      <Link href="/[country]/[city]/[stateCity]" as={`/${country}/${state}/${stateCity}`}>
        <a>{stateCity}</a>
      </Link>
    </li>
  )
}
