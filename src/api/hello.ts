import { Response } from 'express'

export const getHello = {
  Hello: async ({}, res: Response) => {
    res.send('Hello World');
  }
}