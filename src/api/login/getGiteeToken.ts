import dotenv from 'dotenv'
import { Request, Response } from 'express'
import { ApiPost, ApiGet } from '../../utils/request'
import { Params, ResponseData } from './types'

const config = dotenv.config().parsed

const params: Params = {
  client_id: config!.GITEE_CLIENT_ID,
  client_secret: config!.GITEE_CLIENT_SECRET,
  redirect_uri: 'http://localhost:3000/login/gitee',
  code: '',
}

const responseData: ResponseData = {
  statusCode: 2000,
  message: 'success',
  data: null
}

const setResponseData = (newData: ResponseData) => {
  responseData.statusCode = newData.statusCode
  responseData.message = newData.message
  responseData.data = newData.data
}

export const getGiteeToken = {
  GitToken: async (req: Request, res: Response) => {
    params.code = String(req.query.code)

    // 获取Gitee token
    let token = ''
    try {
      console.log(params)
      const data = await ApiPost('https://gitee.com/oauth/token?grant_type=authorization_code', params)
      token = data.data.access_token
    } catch (e: any) {
      setResponseData({ statusCode: 5001, message: '获取GitHub token失败', data: null })
    }

    // 获取用户信息
    try {
      const message = (await ApiGet('https://gitee.com/api/v5/user', {
        params: {
          access_token: token
        }
      }))
      if (message.status === 200) {
        // 管理员信息比对
        if (message.data.id != config!.GITEE_USER_ID)
          setResponseData({ statusCode: 4003, message: '用户信息不匹配', data: null })
        else setResponseData({
          statusCode: 2000,
          message: 'success',
          data: {
            login: message.data.login,
            id: message.data.id,
            token: token,
            avatar_url: message.data.avatar_url
          }
        })
      } else setResponseData({ statusCode: 4001, message: '获取用户信息失败', data: null })
    } catch (e: any) {
      setResponseData({ statusCode: 5002, message: '无效token', data: null })
    }
    res.send(responseData)
  }
}