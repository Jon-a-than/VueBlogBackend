import express, { Router } from 'express'
import { getGithubToken } from '../api/login/getGithubToken'
import { getGiteeToken } from '../api/login/getGiteeToken'
import { getHello } from '../api/hello'

const router: Router = express.Router()

router.get('/', getHello.Hello)

router.get('/login/gitee', getGiteeToken.GitToken)
router.get('/login/github', getGithubToken.GitToken)

export default router