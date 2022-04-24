import { Response } from 'express'

export const getHello = {
  Hello: ({}, res: Response) => {
    res.send('Hello World');
  }
}