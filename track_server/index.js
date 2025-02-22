const dbConnect = require('./config/database')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cookieParser())
app.use(express.json({ limit: '10mb' }))
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: 'track-app-pi.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

const Routes = require('./routes/routes')
app.use('/api', Routes)

dbConnect()

app.get('/api', (req, res) => {
    res.json({
        nothing: 'here'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})

