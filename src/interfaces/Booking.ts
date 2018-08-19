import { ISeat } from './Seat'

export interface IBooking {
  bookerName: string,
  bookerEmail: string,
  seat: ISeat
}