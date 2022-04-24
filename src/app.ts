const express = require('express')
const bodyParser = require('body-parser')
const useRouter = require('./routes')
const cors = require('cors')

const port = 3000
const app = express()

app.use(cors())
app.use(bodyParser.json())
useRouter(app)

app.listen(port, () => console.log(`Success!\nhttp://localhost:${port}/`))