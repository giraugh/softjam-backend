import { Router } from 'express'
import hasParams from '../middleware/hasParams'
import getBooking from '../routes/getBooking'
import getAllBookings from '../routes/getAllBookings'
import createBooking from '../routes/createBooking'

const router = Router()

router.post('/', hasParams('body', ['eventId', 'bookerName', 'bookerEmail', 'seatIds']), createBooking)
router.get('/:id', hasParams('params', ['id']), getBooking)
router.get('/', getAllBookings)

export default router