import {connect} from 'mongoose'

//连接数据库

const mongoose = () => {
  connect('mongodb://localhost:27017/vueBlog', (err) => {
    if (err) {
      throw err;
    } else {
      console.log("MongoDB连接成功！")
    }
  })
}

export default mongoose