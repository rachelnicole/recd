import { recs } from '../../recs'

export default function handler(req, res) {
  res.status(200).json(recs)
}
