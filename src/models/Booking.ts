import { Schema, Document, model } from 'mongoose'
import { IBooking } from '../interfaces/Booking'
import { Event } from './Event'

export interface IBookingModel extends IBooking, Document {}

export let BookingSchema = new Schema({
  eventId: {type: Schema.Types.ObjectId, ref: 'Event'},
  bookerName: String,
  bookerEmail: String,
  seats: [{
    id: Number
  }]
}, {
  timestamps: { createdAt: 'createdAt' }
})

BookingSchema.methods.getEvent = function() {
  return Event
    .findById(this.eventId)
}

export const Booking = model<IBookingModel>('Booking', BookingSchema)