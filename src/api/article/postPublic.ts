import { Request, Response } from 'express'

export const postPublic = {
  Public: (req: Request, res: Response) => {
    // console.log(req.body)
    /* req.body
    * {
    *   title: 'test',
    *   content: 'test',
    *   tags: [],
    *   categories: [ '🚓' ],
    *   isPublic: false
    * }
    */
    // TODO: 文章加入数据库

    res.send({
      isGet: 'success'
    })
  }
}