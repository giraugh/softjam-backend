import express from 'express'
import seats from './seats'

// Create app
const app = express()

// Define 'seats' endpoint
app.get('/seats', (req, res) => {
  res.send(seats)
})

// Export app
export default app