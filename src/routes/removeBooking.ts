import { Booking } from '../models/Booking'
import { Request, Response } from 'express'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  const id = req.params['id']
  console.log(`Searching for booking [${id}]`)
  Booking
    .findById(id)
    .then((booking) => {
      // Test hash
      if (booking.checkHash(req.body['password'])) {
        booking.remove()
          .then(_ => {
            console.log('Succesfully removed booking')
            return res
              .sendStatus(200)
          })
          .catch(errorHandler('Error removing booking', res))
      } else {
        return res
          .status(400)
          .send('Incorrect password')
      }
    })
    .catch(errorHandler('Error finding booking', res))
}