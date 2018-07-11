/**
 * @swagger
 * definitions:
 *   GenericResponse:
 *     type: object
 *     required:
 *       - status
 *       - code
 *       - body
 *     properties:
 *       status:
 *         type: string
 *       code:
 *         type: number
 *       body:
 *         type: object
 *     example:
 *       status: OK
 *       code: 200
 *       body: Action successful
 */
export default class GenericResponse {
  constructor (status, code, body) {
    this.status = status
    this.code = code
    this.body = body
  }
}
