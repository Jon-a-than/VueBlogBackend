import express, { Router } from 'express'
import { getHello } from '../api/hello'

const router: Router = express.Router()

router.get('/', getHello.Hello)

export default router