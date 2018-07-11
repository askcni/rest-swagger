import * as DAO from '../daos/'
import * as Swagger from './swagger'

const dao = DAO.getInstance('memory')
const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /rundetails/{id}:
 *   get:
 *     summary: Retrieve test cases in a run id
 *     description: Pass run id to get test cases
 *     tags:
 *       - Run Details
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
 *         description: Run details for this run id
 *         schema:
 *           $ref: '#/definitions/RunDetails'
 */
router.get('/:id', (req, res, next) => {
  console.log('GET /rundetails/:id ', req.params.id);
  const response = dao.retrieve(parseInt(req.params.id, 10))
  Swagger.validateModel('RunDetail', response)
  res.send(response)
})

/**
 * @swagger
 * /rundetails:
 *   post:
 *     summary: Add test case to a specific Run
 *     description: Add test case to a run
 *     tags:
 *       - Run Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: object
 *         description: Run object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/RunDetail'
 *     responses:
 *       200:
 *         description: added a new run detail
 *         schema:
 *           $ref: '#/definitions/GenericResponse'
 */
router.post('/', (req, res, next) => {
  console.log('POST /rundetails: ', req.body);
  Swagger.validateModel('RunDetail', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('GenericResponse', response)
  res.send(response)
})

/**
 * @swagger
 * /rundetails/screenshot/{run_id}/{tc_id}:
 *   get:
 *     summary: Gets screenshot for a tese case if present
 *     description: Fetches a screenshot corresponding to a run detail and run id
 *     tags:
 *       - Run Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name : run_id
 *         type : string
 *         in: path
 *         required: true
 *       - name : tcid
 *         type : string
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: added a new run detail
 *         schema:
 *           $ref: '#/definitions/RunDetailScreenshot'
 */
router.get('/screenshot/:run_id/:tc_id', (req, res, next) => {
  console.log('GET /screenshot/:run_id/:tc_id ', req.params.run_id, req.params.tc_id);
  Swagger.validateModel('RunDetailScreenshot', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('RunDetailScreenshot', response)
  res.send(response)
})

/**
 * @swagger
 * /rundetails/screenshot:
 *   post:
 *     summary: Post a screenshot for a test case
 *     description: Adds a screenshot corresponding to a test case and run id
 *     tags:
 *       - Run Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: object
 *         description: RunDetailScreenshot object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/RunDetailScreenshot'
 *     responses:
 *       200:
 *         description: added screenshot
 *         schema:
 *           $ref: '#/definitions/GenericResponse'
 *         example:
 *           # Properties of the referenced object
 *           status: OK
 *           code: 200
 *           message: action successful
 */
router.post('/screenshot', (req, res, next) => {
  Swagger.validateModel('RunDetail', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('GenericResponse', response)
  res.send(response)
})

/**
 * @swagger
 * /rundetails:
 *   put:
 *     summary: Updating existing tese case details
 *     description: Used to update status and logs
 *     tags:
 *       - Run Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: object
 *         description: Run details object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/RunDetail'
 *     responses:
 *       200:
 *         description: updated run details
 *         schema:
 *           $ref: '#/definitions/GenericResponse'
 *         example:
 *           # Properties of the referenced object
 *           status: OK
 *           code: 200
 *           message: action successful
 */
router.put('/', (req, res, next) => {
  Swagger.validateModel('RunDetail', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('GenericResponse', response)
  res.send(response)
})

module.exports = router
