import appFactory from './appFactory'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Call Dotenv and pull Values
dotenv.config()
const {DBUSER, DBPASSWORD, DEVDBURL} = process.env

// Determine URL based on environment
const dbURL = process.env.NODE_ENV === 'production'
? `mongodb://${DBUSER}:${DBPASSWORD}@ds123532.mlab.com:23532/software-jam-db`
: DEVDBURL

// Connect to database
console.log('Connecting to', dbURL)
mongoose.connect(dbURL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('connected to database') })

// Start app
const app = appFactory(db)
app.listen(3000)