import express from 'express'
import bodyParser from 'body-parser'
import useRouter from './router'
import cors from 'cors'
import mongoose from './mongo'
import { Test } from './mongo/models/test'

const port = 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(useRouter)
mongoose()

Test.create({ name: '张三' }, (err, doc) => {
  if (err) {
    console.log(err)
  } else {
    console.log(doc)
  }
})

app.listen(port, () => {
  console.log('\x1b[0;95msuccessful running!\x1b[0m')
  console.log(`\x1b[0;96mhttp://localhost:${port}\n\x1b[0m`)
})