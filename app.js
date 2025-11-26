import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'
import cors from 'cors'

const app = express()

// IMPORTANT for Railway
const port = process.env.PORT || 8000
const host = "0.0.0.0"

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Health check route
app.get("/", (req, res) => {
    res.json({ status: "Whatsender API is running 🚀" })
})

app.use('/', routes)

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
    init()
})

nodeCleanup(cleanup)

export default app
