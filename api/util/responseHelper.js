import Model from '../models/run_meta.model'

let buildModelObject = (model) => {
  return new Model(
        model.team,
        model.product,
        model.features.split(',').map(String),
        model.state,
        model.cluster,
        model.total_count,
        model.passed,
        model.failed,
        model.skipped,
        model.added_on
    )
}

let buildSuccessResponse = (response) => {
  let resp = {}
  resp.status = 'Success'
  resp.code = 200
  resp.body = response
  return resp
}

module.exports = {
  buildModelObject,
  buildSuccessResponse
}
