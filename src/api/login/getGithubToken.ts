import { Request, Response } from 'express'
import { ApiPost, ApiGet } from '../../utils/request'
import { Params, Message, ResponseData } from './types'
import dotenv from 'dotenv'

const config = dotenv.config().parsed

const params: Params = {
  client_id: config!.CLIENT_ID,
  client_secret: config!.CLIENT_SECRET,
  code: '',
}

const responseData: ResponseData = {
  statusCode: 2000,
  message: 'success',
  data: {},
}

const message: Message = {
  login: '',
  id: -1,
  token: '',
  avatar_url: '',
}

export const getGithubToken = {
  GitToken: async (req: Request, res: Response) => {
    // 获取GitHub code
    params.code = String(req.query.code)

    // 获取GitHub token
    const data = await ApiPost('https://github.com/login/oauth/access_token', params)
    const token = data.data.split('&')[0].split('=')[1]

    // 获取用户信息
    let userData: any = {
      status: 0,
      data: {
        login: '',
        id: 0,
        token: '',
        avatar_url: '',
      }
    }

    try {
      userData = await ApiGet('https://api.github.com/user', {
        headers: {
          'Authorization': 'token ' + token
        }
      })

      // 处理请求结果
      if (userData.status === 200 && userData.data.login) {
        responseData.statusCode = 2000
        responseData.message = 'success'
      } else {
        responseData.statusCode = 4001
        responseData.message = 'fail'
      }
    } catch (e: any) {
      responseData.statusCode = 4001
      responseData.message = 'fail'
    }

    // 返回用户信息
    if (responseData.statusCode === 2000) {
      message.login = userData.data.login
      message.id = userData.data.id
      message.token = token
      message.avatar_url = userData.data.avatar_url
      responseData.data = message
    }

    // TODO: 将用户信息存入数据库

    res.send(responseData)
  }
}