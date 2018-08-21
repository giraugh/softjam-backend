import { Schema, Document, model } from 'mongoose'
import { IBooking } from '../interfaces/Booking'
import { Event } from './Event'
import { SHA256 } from 'crypto-js'

export interface IBookingModel extends IBooking, Document {}

export let BookingSchema = new Schema({
  eventId: {type: Schema.Types.ObjectId, ref: 'Event'},
  bookerName: String,
  bookerEmail: String,
  hash: String,
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

BookingSchema.methods.checkHash = function(password) {
  const hashed = SHA256(password).toString()
  return hashed === this.hash
}

export const Booking = model<IBookingModel>('Booking', BookingSchema)