import { recs } from '../../../../../recs'


export default function handler({ query: { country, city, stateCity } }, res) {
  const cityName = city
  const filtered = recs.filter((p) => p.country === country)
  const filterCity = filtered[0].state.filter((p) => p.stateName === cityName)
  const filterPlace = filterCity[0].city.filter((p) => p.cityName === stateCity)

  if (filtered.length > 0) {
    res.status(200).json(filterPlace[0])
  } else {
    res.status(404).json({ message: `City not found.` })
  }

}

//{ message: `Country ${country} not found.` }

