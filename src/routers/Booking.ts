import { Router } from 'express'
import hasParams from '../middleware/hasParams'
import getBooking from '../routes/getBooking'
import getAllBookings from '../routes/getAllBookings'
import createBooking from '../routes/createBooking'
import removeBooking from '../routes/removeBooking'

const router = Router()

router.post('/', hasParams('body', ['eventId', 'bookerName', 'bookerEmail', 'seatIds']), createBooking)
router.get('/:id', hasParams('params', ['id']), getBooking)
router.delete('/:id', hasParams('params', ['id']), removeBooking)
router.get('/', getAllBookings)

export default router