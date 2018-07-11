/**
 * @swagger
 * definitions:
 *   RunDetailScreenshot:
 *     type: object
 *     required:
 *       - run_id
 *       - tc_id
 *       - screenshot
 *     properties:
 *       run_id:
 *         type: string
 *       tc_id:
 *         type: string
 *       screenshot:
 *         type: string
 *         format: byte
 *     example:
 *       run_id: 10
 *       tc_id: tc001
 *       screenshot: Sed ut perspiciatis unde omnis iste natus error sit
 */
export default class RunDetailScreenshot {
  constructor (run_id, test_case_id, screenshot) {
    this.run_id = run_id
    this.test_case_id = test_case_id
    this.screenshot = screenshot
  }
}
