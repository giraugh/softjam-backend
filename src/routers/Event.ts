import { Router } from 'express'
import hasParams from '../middleware/hasParams'
import getEvent from '../routes/getEvent'
import getEventBookings from '../routes/getEventBookings'
import getAllEvents from '../routes/getAllEvents'
import createEvent from '../routes/createEvent'

const router = Router()

router.post('/', hasParams('body', ['title', 'date', 'price']), createEvent)
router.get('/:id/bookings', hasParams('params', ['id']), getEventBookings)
router.get('/:id', hasParams('params', ['id']), getEvent)
router.get('/', getAllEvents)

export default router