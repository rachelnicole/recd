import { recs } from '../../recs'


let sortArray = (x, y) => {
  if (x.country < y.country) { return -1; }
  if (x.country > y.country) { return 1; }
  return 0
}

let sorted = recs.sort(sortArray)

export default function handler(req, res) {
  res.status(200).json(sorted)
}
