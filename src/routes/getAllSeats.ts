import { Request, Response } from 'express'
import { seats as seatLabels } from '../data/seats'

export default (req: Request, res: Response) => {
  res
    .status(200)
    .send(seatLabels.map(({id, label}) => ({
      id,
      label
    })))
}