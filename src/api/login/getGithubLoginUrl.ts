import { Response } from 'express'
import dotenv from 'dotenv'

const config = dotenv.config().parsed

export const getGithubLoginUrl = {
  GithubLoginUrl: ({}, res: Response) => {
    console.log(dotenv.config())
    res.send('https://github.com/login/oauth/authorize?client_id=' + config!.CLIENT_ID)
  }
}