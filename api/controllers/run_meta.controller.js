import * as DAO from '../daos/'
import * as Swagger from './swagger'

const dao = DAO.getInstance('runMeta')
const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /runs:
 *   get:
 *     summary: Retrieve the list of runs
 *     description: Defaults to last 20
 *     tags:
 *       - Runs
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: count
 *         schema:
 *           type: integer
 *           default: 20
 *         description: number of run details to fetch
 *     responses:
 *       200:
 *         description: Runs
 *         schema:
 *           $ref: '#/definitions/RunMetas'
 */
router.get('/', (req, res, next) => {
  console.log('inside run meta get /', req.query)
  dao.getRuns(req.query.count ? req.query.count : 10).then(response => {
    console.log('RESPONSE: ', response)
    if (response.code === 200) {
      Swagger.validateModel('RunMetas', response.body)
    } else {
      Swagger.validateModel('GenericResponse', response)
    }
    res.send(response)
  })
})

/**
 * @swagger
 * /runs/{id}:
 *   get:
 *     summary: Retrieve a specific Run
 *     description: Retrieve a specific Run
 *     tags:
 *       - Runs
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the run to retrieve
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: run
 *         schema:
 *           $ref: '#/definitions/RunMetas'
 *       500:
 *         description: run
 *         schema:
 *           $ref: '#/definitions/GenericResponse'
 */
router.get('/:id', (req, res, next) => {
  console.log('inside run meta get run by id/', req.params)
  dao.getRunById(req.params.id).then(response => {
    console.log('RESPONSE: ', response)
    if (response.code === 200) {
      Swagger.validateModel('RunMetas', response.body)
    } else {
      Swagger.validateModel('GenericResponse', response)
    }
    res.send(response)
  })
})

/**
 * @swagger
 * /runs:
 *   post:
 *     description: Create a new run
 *     tags:
 *       - Runs
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: run
 *         description: Run object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/RunMeta'
 *     responses:
 *       200:
 *         description: new run
 *         schema:
 *           $ref: '#/definitions/GenericResponse'
 */
router.post('/', (req, res, next) => {
  Swagger.validateModel('RunMeta', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('GenericResponse', response)
  res.send(response)
})

module.exports = router
