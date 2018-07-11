import Model from '../models/run_meta.model'
import Generic from '../models/generic_response.model'
import * as ResponseHelper from '../util/responseHelper'

var pool = require('../util/database')
var mysql = require('mysql')

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

  async getRunById (run_id) {
    console.log('inside getRunById')
    let query = 'SELECT * FROM `run_meta` where `run_id` = ?'
    let rows = []
    try {
      var result = await pool.query(query, [run_id])
      result.forEach(function (model) {
        rows.push(ResponseHelper.buildModelObject(model))
      })
      return ResponseHelper.buildSuccessResponse(rows)
    } catch (err) {
      return new Generic('Error', 500, err)
    }
  }
}
