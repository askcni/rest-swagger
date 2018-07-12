/**
 * @swagger
 * definitions:
 *   RunMetaResponse:
 *     type: object
 *     required:
 *       - id
 *       - team
 *       - product
 *       - features
 *       - state
 *       - cluster
 *       - added_on
 *     properties:
 *       id:
 *         type: number
 *       team:
 *         type: string
 *       product:
 *         type: string
 *       features:
 *         type: array
 *         items:
 *           type: string
 *       state:
 *         type: string
 *         enum: [QUEUED,IN_PROGRESS,COMPLETED]
 *       cluster:
 *         type: string
 *         enum: [NIGHTLY,STAGING,IN,SG,EU,CN]
 *       addedOn:
 *         type: string
 *         format: date
 *     example:
 *       id: 10
 *       team: test
 *       product: api
 *       features: [feat1,feat2]
 *       state: QUEUED
 *       cluster: NIGHTLY
 *       addedOn: 2018-01-1
 */
export default class RunMetaResponse {
  constructor (id, team, product, features, state, cluster, addedOn) {
    this.id = id
    this.team = team
    this.product = product
    this.features = features
    this.state = state
    this.cluster = cluster
    this.addedOn = addedOn
  }
}
