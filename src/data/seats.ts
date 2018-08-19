import { ISeat } from '../interfaces/Seat'

export interface ISeatLabel {
  id: number,
  label: string
}

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const seatsPerRow = 29
export const seats: ISeatLabel[] = Array.from({length: rows.length * seatsPerRow}).map((_, i) => ({
  id: i,
  label: rows[i % rows.length] + String(1 + Math.floor(i / rows.length))
}))

export const seatIdToLabel = id =>
  seats.find(s => s.id === id).label