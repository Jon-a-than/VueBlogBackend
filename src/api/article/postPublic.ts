import { Request, Response } from 'express'
import { Article } from '../../mongo/models/article'

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
    Article.create({
      ...req.body,
      update_time: Date.now(),
      create_time: Date.now(),
    }, (err: any, doc: any) => {
      if (err) {
        console.log(err)
      } else {
        console.log(doc)
      }
    })
    
    res.send({
      isGet: 'success'
    })
  }
}