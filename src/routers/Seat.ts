import { Router } from 'express'
import getAllSeats from '../routes/getAllSeats'

const router = Router()

router.get('/', getAllSeats)

export default router