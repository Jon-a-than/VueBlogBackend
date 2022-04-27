import express, { Router } from 'express'
import { getGithubToken } from '../api/login/getGithubToken'
import { getHello } from '../api/hello'

const router: Router = express.Router()

router.get('/', getHello.Hello)

router.get('/login/token', getGithubToken.GitToken)

export default router