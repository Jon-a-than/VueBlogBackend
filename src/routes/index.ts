const Hello = require('../api/hello')

module.exports = function useRouter(app: any) {
  app.get('/', Hello.Hello)
}