import { recs } from '../../../../recs'


export default function handler({ query: { country, city } }, res) {
  const filtered = recs.filter((p) => p.country === country)

  const cityName = city
  
  let filterCity;



  if (filtered.length > 0) {
    if (country === 'United States') {
      filterCity = filtered[0].state.filter((p) => p.stateName === cityName)
    } else {
      filterCity = filtered[0].city.filter((p) => p.cityName === cityName)
    }


    res.status(200).json(filterCity[0])
  } else {
    res.status(404).json({ message: `City ${city} not found.` })
  }
}

