enum SeatFlags {
  DisabledAccess,
  Reserved
}

interface Seat {
  label: string,
  flags?: SeatFlags[]
}

const seats: Seat[] =
  Array
    .from({length: 920})
    .map((_, i) => ({
      label: String(i).padStart(3, '0')
    }))

export default seats
