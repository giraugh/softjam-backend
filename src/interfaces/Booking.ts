import { ISeat } from './Seat'
import { IEventModel } from '../models/Event'

export interface IBooking {
  eventId: string
  bookerName: string,
  bookerEmail: string,
  seats: ISeat[],
  hash: string,
  getEvent(): Promise<IEventModel>,
  checkHash(string): Boolean
}