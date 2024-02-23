import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())

app.post('/api', (req: Request, res: Response) => {
  const index = req.body.index
  const delay = Math.floor(Math.random() * 1000) + 1

  setTimeout(() => {
    res.json({ index })
  }, delay)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})