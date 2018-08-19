import { Event } from '../models/Event'
import { Request, Response } from 'express'
import errorHandler from '../handlers/error'
import { seatIdToLabel } from '../data/seats'

export default (req: Request, res: Response) => {
  const id = req.params['id']
  console.log(`Searching for event [${id}]`)
  Event
    .findById(id)
    .then((event) => {
      if (!event) {
        res
          .status(400)
          .send('No such event')
      } else {
        event
          .getBookings()
          .then(bookings => {
            res.send({
              title: event.title,
              bookings: bookings.map(booking => ({
                bookerName:  booking.bookerName,
                bookerEmail: booking.bookerEmail,
                seats: booking.seats.map(seat => seatIdToLabel(seat.id))
              }))
            })
          })
      }
    })
    .catch(errorHandler('Error finding event', res))
}