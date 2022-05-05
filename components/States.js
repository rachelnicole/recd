import Link from 'next/link'

export default function States({ country, state }) {
  console.log('hihihi')
  
  // gets passed in data from pages/index.js, renders as list and sets up api/people/[id] as link for displayed content.

  //in Link, /person/[id] is the api route, and person/${person.id} is the template literal


  return (
    <li>
      <Link href="${country}/[state]" as={`${country}/${state}`}>
        <a>{state}</a>
      </Link>
    </li>
  )
}
