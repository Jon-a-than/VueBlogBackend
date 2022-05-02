import express, { Router } from 'express'
import { getGithubToken } from '../api/login/getGithubToken'
import { getGiteeToken } from '../api/login/getGiteeToken'
import { getHello } from '../api/hello'
import { postPublic } from '../api/article/postPublic'

const router: Router = express.Router()

router.get('/', getHello.Hello)

// 登录验证路由
router.get('/login/gitee', getGiteeToken.GitToken)
router.get('/login/github', getGithubToken.GitToken)

// 文章发布路由
router.post('/article/public', postPublic.Public)

export default router