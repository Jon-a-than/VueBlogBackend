import express from 'express'
import bodyParser from 'body-parser'
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))