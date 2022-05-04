import { recs } from '../../../recs'


export default function handler({ query: { country } }, res) {
  const filtered = recs.filter((p) => p.country === country)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Country ${country} not found.` })
  }
}
