class WTServer {
  _initApp () {
    // Express
    const express = require('express')
    const app = express()

    // CORS
    const cors = require('cors')
    app.use(cors())

    // Helmet
    const helmet = require('helmet')
    app.use(helmet())

    // JSON
    const bodyParser = require('body-parser')
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    return app
  }

  constructor () {
    this._app = this._initApp()
  }

  get app () {
    return this._app
  }
}

export default WTServer
