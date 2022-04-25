import express, { Router } from 'express'
import { getGithubLoginUrl } from '../api/login/getGithubLoginUrl'
import { getGithubToken } from '../api/login/getGithubToken'
import { getHello } from '../api/hello'

const router: Router = express.Router()

router.get('/', getHello.Hello)
router.get('/login', getGithubLoginUrl.GithubLoginUrl)
router.get('/login/token', getGithubToken.GitToken)

export default router