import express from 'express'
import bodyParser from 'body-parser'
import headers from './headers'
import EventRouter from './routers/Event'
import BookingRouter from './routers/Booking'

export default (db) => {
  // Create app
  const app = express()

  app.use(headers)
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use('/event', EventRouter)
  app.use('/booking', BookingRouter)

  return app
}