import { Schema, Document, Model, model } from 'mongoose'
import { IEvent } from '../interfaces/Event'
import { Booking } from './Booking'

export interface IEventModel extends IEvent, Document {}

export let EventSchema = new Schema({
  title: String,
  date: Date,
  bookableSeats: [{ id: Number }]
})

EventSchema.methods.getBookings = function() {
  return Booking
    .find({})
    .then(bookings => bookings
      .filter(booking => String(booking.eventId) === String(this._id))
    )
}

EventSchema.methods.getBookedSeats = function() {
  return this.getBookings()
    .then(bookings => bookings
      .filter(booking => String(booking.eventId) === String(this._id))
      .map(booking => booking.seats)
      .reduce((acc, val) => acc.concat(val), [])
    )
}

export const Event = model<IEventModel>('Event', EventSchema)