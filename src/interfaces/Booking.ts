import { ISeat } from './Seat'
import { IEventModel } from '../models/Event'

export interface IBooking {
  eventId: String
  bookerName: string,
  bookerEmail: string,
  seats: ISeat[],
  getEvent(): Promise<IEventModel>
}