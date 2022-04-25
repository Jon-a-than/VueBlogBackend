import { Request, Response } from 'express'
import { ApiPost } from '../../utils/request'
import dotenv from 'dotenv'

interface Params {
  client_id: string,
  client_secret: string,
  code: string
}

const config = dotenv.config().parsed
const params: Params = {
  client_id: config!.CLIENT_ID,
  client_secret: config!.CLIENT_SECRET,
  code: '',
}

export const getGithubToken = {
  GitToken: async (req: Request, res: Response) => {
    params.code = String(req.query.code)
    const data = await ApiPost('https://github.com/login/oauth/access_token', params)
    const token = data.data.split('&')[0].split('=')[1]
    console.log(token)
    res.send('')
  }
}