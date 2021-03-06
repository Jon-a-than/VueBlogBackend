interface Params {
  client_id: string,
  client_secret: string,
  code: string,
  redirect_uri?: string,
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
  data: Message | null
}

export { Params, ResponseData }