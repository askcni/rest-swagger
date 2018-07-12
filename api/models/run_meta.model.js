/**
 * @swagger
 * definitions:
 *   RunMeta:
 *     type: object
 *     required:
 *       - team
 *       - product
 *       - features
 *       - state
 *       - cluster
 *       - addedOn
 *     properties:
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
 *       added_on:
 *         type: string
 *         format: date-time
 *     example:
 *       team: test
 *       product: api
 *       features: [feat1,feat2]
 *       state: QUEUED
 *       cluster: NIGHTLY
 *       addedOn: 2018-01-1
 *   RunMetas:
 *     type: array
 *     items:
 *       $ref: '#/definitions/RunMeta'
 *   GenericResponse:
 *     type: object
 *     requried:
 *       - status
 *       - code
 *       - body
 *     properties:
 *       status:
 *         type: string
 *       code:
 *         type: number
 *       body:
 *         type: array
 *         items:
 *           $ref: '#/definitions/RunMeta'
 */
export default class RunMeta {
  constructor (team, product, features, state, cluster, totalCount, passed, failed, skipped, addedOn) {
    this.team = team
    this.product = product
    this.features = features
    this.state = state
    this.cluster = cluster
    this.totalCount = totalCount
    this.passed = passed
    this.failed = failed
    this.skipped = skipped
    this.addedOn = addedOn
  }
}
