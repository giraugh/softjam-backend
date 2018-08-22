import { Router } from 'express'
import hasParams from '../middleware/hasParams'
import getEvent from '../routes/getEvent'
import getEventBookings from '../routes/getEventBookings'
import getAllEvents from '../routes/getAllEvents'
import createEvent from '../routes/createEvent'
import removeEvent from '../routes/removeEvent'

const router = Router()

router.post('/', hasParams('body', ['title', 'description', 'date']), createEvent)
router.get('/:id/bookings', hasParams('params', ['id']), getEventBookings)
router.get('/:id', hasParams('params', ['id']), getEvent)
router.delete('/:id', hasParams('params', ['id']), removeEvent)
router.get('/', getAllEvents)

export default router