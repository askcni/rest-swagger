/**
 * @swagger
 * definitions:
 *   RunDetail:
 *     type: object
 *     required:
 *       - runId
 *       - testCaseId
 *       - testCaseDescription
 *       - status
 *       - logs
 *       - addedOn
 *     properties:
 *       runId:
 *         type: string
 *       testCaseId:
 *         type: string
 *       testCaseDescription:
 *         type: string
 *       status:
 *         type: string
 *       logs:
 *         type: string
 *       addedOn:
 *         type: string
 *     example:
 *       runId: 10
 *       testCaseId: tc001
 *       testCaseDescription: im a description
 *       status: FAILED
 *       logs: Sed ut perspiciatis unde omnis iste natus error sit voluptatem
 *       addedOn: 2018-01-01
 *   RunDetails:
 *     type: array
 *     items:
 *       $ref: '#/definitions/RunDetail'
 */
export default class RunDetail {
  constructor (runId, testCaseId, testCaseDescription, status, logs, addedOn) {
    this.runId = runId
    this.testCaseId = testCaseId
    this.testCaseDescription = testCaseDescription
    this.status = status
    this.logs = logs
    this.addedOn = addedOn
  }
}
