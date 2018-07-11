const express = require('express')
const router = express.Router()

const options = {
  swaggerDefinition: {
    info: {
      title: 'REST - Swagger',
      version: '1.0.0',
      description: 'REST API with Swagger doc',
      contact: {
        email: 'contact@danielpecos.com'
      }
    },
    tags: [
      // {
      //   name: 'Stocks',
      //   description: 'Stocks API'
      // },
      {
        name: 'Runs',
        description: 'Runs API'
      },
      {
        name: 'Run Details',
        description: 'Run Details API'
      }
    ],
    schemes: ['http', 'https'],
    host: 'localhost:3000',
    basePath: '/api'
  },
  apis: [
    // './api/controllers/stocks.controller.js',
    './api/controllers/run_meta.controller.js',
    './api/controllers/run_details.controller.js',
    // './api/models/stock.model.js',
    './api/models/run_meta.model.js',
    './api/models/run_meta_response.model.js',
    './api/models/generic_response.model.js',
    './api/models/run_detail.model.js',
    './api/models/run_detail_screenshot.model.js'
  ]
}

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = swaggerJSDoc(options)
require('swagger-model-validator')(swaggerSpec)

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

function validateModel (name, model) {
  const responseValidation = swaggerSpec.validateModel(name, model, true, false)
  // console.log("RESPONSE VALIDATION: ", responseValidation);
  if (!responseValidation.valid) {
    console.error(responseValidation.errors)
    throw new Error(`Model doesn't match Swagger contract`)
  }
}

module.exports = {
  router,
  validateModel
}
