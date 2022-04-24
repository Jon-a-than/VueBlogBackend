import express from 'express'
import bodyParser from 'body-parser'
import useRouter from './router'
import cors from 'cors'

const port = 3000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(useRouter)

app.listen(port, () => {
  console.log('\x1b[0;95msuccessful running!\x1b[0m')
  console.log(`\x1b[0;96mhttp://localhost:${port}\n\x1b[0m`)
})