interface Params {
  client_id: string,
  client_secret: string,
  code: string
}

interface Message {
  login: string,
  id: number,
  token: string,
  avatar_url: string
}

interface ResponseData {
  statusCode: number,
  message: string,
  data: any
}

export { Params, Message, ResponseData }