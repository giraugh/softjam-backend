import { Request, Response } from 'express'
import { ISeat } from '../interfaces/Seat'
import { Event } from '../models/Event'
import { seats as defaultBookableSeats, ISeatLabel } from '../data/seats'
import errorHandler from '../handlers/error' 

const seatsFromString = (string: string): ISeat[] =>
  string
    .split(',')
    .map(s => Number(s))
    .map(i => ({ id: i }))

const seatsFromLabels = (labels: ISeatLabel[]): ISeat[] =>
  labels
    .map(l => ({ id: l.id }))

export default (req: Request, res: Response) => {
  const event = new Event({
    ...req.body,
    bookableSeats: seatsFromString(req.body.bookableSeats) || seatsFromLabels(defaultBookableSeats)
  })
  event
    .save()
    .then(event => {
      console.log(`Saved event "${event.title}"`)
      res
        .status(200)
        .send(event._id)
    })
    .catch(errorHandler('Error creating event', res))
}