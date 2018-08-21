import { ISeat } from '../interfaces/Seat'
import { Booking, IBookingModel } from '../models/Booking'
import { Event } from '../models/Event'
import { Request, Response } from 'express'
import errorHandler from '../handlers/error' 
import { Types } from 'mongoose'

// ['eventId', 'bookerName', 'bookerEmail', 'seatIds']

export default (req: Request, res: Response) => {
  // Seat Ids are a comma seperated list of ids
  const seatIds: string[] = req.body.seatIds.split(',')

  // Convert to list of seats
  const seats = seatIds.map(id => <ISeat>({id: Number(id)}))

  // Written as asyncfunction for brevity
  const doCreateBooking = async function () {
    // Is id a valid id?
    if (!Types.ObjectId.isValid(req.body.eventId)) {
      return res
        .status(400)
        .send(`Invalid id parameter: ${req.body.eventId}`)
    }

    // Get event
    const event = await Event.findById(req.body.eventId)
    if (!event) {
      return res
        .status(400)
        .send(`No event with id ${req.body.eventId}`)
    }

    // Ensure all seats are bookable
    const areBookableSeats = seats.every(seat => event.bookableSeats.map(s => s.id).includes(seat.id))
    if (!areBookableSeats) {
      return res
        .status(400)
        .send('Requested seats are unavailable (invalid seats)')
    }

    // Ensure seats are available
    const alreadyBooked = event
      .getBookedSeats()
      .then(bookedSeats => seats.some(seat => bookedSeats.map(s => s.id).includes(seat.id)))
    if (alreadyBooked) {
      return res
        .status(400)
        .send('Requested seats are unavailable (already booked)')
    }

    // Create booking
    const booking = new Booking({...req.body, seats})
    return booking
      .save()
  }

  doCreateBooking()
    .then((booking: IBookingModel) => {
      console.log(`Saved booking for "${booking.bookerName}"`)
      res
        .status(200)
        .send(booking._id)
    })
    .catch(errorHandler('Error creating booking', res))
}