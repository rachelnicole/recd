import Link from 'next/link'

function Country({ country }) {
  // gets passed in data from pages/index.js, renders as list and sets up api/people/[id] as link for displayed content.

  //in Link, /person/[id] is the api route, and person/${person.id} is the template literal

  return (
    <li>
      <Link href="[country]" as={`${country.country}`}>
        <a>{country.country}</a>
      </Link>
    </li>
  )
}

export default Country;