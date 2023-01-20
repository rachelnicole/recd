import Link from 'next/link'

function Places({ name, description, photo, address, category, tags, activeMarker }) {

  let mapSlug = name;

  let placeActive = (activeMarker === name ? 'active-place' : '');

  console.log(placeActive);
  
  // gets passed in data from pages/index.js, renders as list and sets up api/people/[id] as link for displayed content.

  //in Link, /person/[id] is the api route, and person/${person.id} is the template literal

  return (
    <div className={`${placeActive} places-list covik-sans-regular`} data-slug={mapSlug}>
      <h3 className="covik-sans-bold places-title">{name}</h3>
      <p>{description}</p>
      <p>{photo}</p>
      <p>{address}</p>
      <p>{category}</p>
      <p>{tags}</p>
    </div>
  )
}

export default Places;