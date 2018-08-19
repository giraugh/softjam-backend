import { Event } from '../models/Event'
import { Router } from 'express'
import hasParams from '../middleware/hasParams'
import getEvent from '../routes/getEvent'
import createEvent from '../routes/createEvent'

const router = Router()

router.post('/event', hasParams('body', ['title', 'date', 'price']), createEvent)
router.get('/event/:id', hasParams('params', ['id']), getEvent)

export default router