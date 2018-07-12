/**
 * @swagger
 * definitions:
 *   RunDetailScreenshot:
 *     type: object
 *     required:
 *       - runId
 *       - tcId
 *       - screenshot
 *     properties:
 *       runId:
 *         type: string
 *       tcId:
 *         type: string
 *       screenshot:
 *         type: string
 *         format: byte
 *     example:
 *       runId: 10
 *       tcId: tc001
 *       screenshot: Sed ut perspiciatis unde omnis iste natus error sit
 */
export default class RunDetailScreenshot {
  constructor (runId, testCaseId, screenshot) {
    this.runId = runId
    this.testCaseId = testCaseId
    this.screenshot = screenshot
  }
}
