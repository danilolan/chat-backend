const room = require('./roomRoutes')

export default function routes (app) {
  app.route('/').get((req, res) => {
    res.status(200).json({ msg: 'Server is working' })
  })

  app.use(
    room
  )
}
