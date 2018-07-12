import Generic from '../models/generic_response.model'
import RunMeta from '../models/run_meta.model'
import * as ResponseHelper from '../util/responseHelper'

var pool = require('../util/database')

export default class RunMetaDAO {
  constructor () {
    this.connection = pool.getConnection
  }

  async getRuns (rowCount) {
    console.log('inside getRuns')
    let query = 'SELECT * FROM `run_meta` order by `run_id` desc limit ?'
    let rows = []
    try {
      var result = await pool.query(query, [rowCount])
      result.forEach(function (model) {
        rows.push(ResponseHelper.buildModelObject(model))
      })
      return ResponseHelper.buildSuccessResponse(rows)
    } catch (err) {
      return new Generic('Error', 500, err)
    }
  }

  async getRunById (runId) {
    console.log('inside getRunById')
    let query = 'SELECT * FROM `run_meta` where `run_id` = ?'
    try {
      var result = await pool.query(query, [runId])
      console.log("response is: ", result)
      if (result.length)
      return ResponseHelper.buildSuccessResponse(ResponseHelper.buildModelObject(result[0]))
      else
        return ResponseHelper.buildSuccessResponse(new RunMeta)
    } catch (err) {
      return new Generic('Error', 500, err)
    }
  }

  async addRun (request) {
    console.log('inside addRun')
  }
}
