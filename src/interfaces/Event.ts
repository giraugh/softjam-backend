import { ISeat } from './Seat'
import { IBookingModel } from '../models/Booking'

export interface IEvent {
  title: string,
  description: string,
  date: Date,
  bookableSeats: ISeat[],
  getBookings(): Promise<IBookingModel[]>
  getBookedSeats(): Promise<ISeat[]>
}