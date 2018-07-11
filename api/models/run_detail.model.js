/**
 * @swagger
 * definitions:
 *   RunDetail:
 *     type: object
 *     required:
 *       - run_id
 *       - test_case_id
 *       - test_case_description
 *       - status
 *       - logs
 *       - added_on
 *     properties:
 *       run_id:
 *         type: string
 *       test_case_id:
 *         type: string
 *       test_case_description:
 *         type: string
 *       status:
 *         type: string
 *       logs:
 *         type: string
 *       added_on:
 *         type: string
 *     example:
 *       run_id: 10
 *       test_case_id: tc001
 *       test_case_description: im a description
 *       status: FAILED
 *       logs: Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
 *       added_on: 2018-01-01
 *   RunDetails:
 *     type: array
 *     items:
 *       $ref: '#/definitions/RunDetail'
 */
export default class RunDetail {
  constructor (run_id, test_case_id, test_case_description, status, logs, added_on) {
    this.run_id = run_id
    this.test_case_id = test_case_id
    this.test_case_description = test_case_description
    this.status = status
    this.logs = logs
    this.added_on = added_on
  }
}
