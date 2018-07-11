import StocksMemoryDAO from './stocks-memory-dao'
import RunMetaDAO from './run_meta.dao'
let memoryDAO = null
let rmDAO = null

export function getInstance (type) {
  console.log("instance type is: ", type)
  if (type === 'memory') {
    if (memoryDAO === null) {
      memoryDAO = new StocksMemoryDAO()
    }
    return memoryDAO
  } else if (type === 'runMeta') {
    if (rmDAO === null) {
      rmDAO = new RunMetaDAO()
    }
    return rmDAO
  } else {
    throw new Error('Unknown DAO type ' + type)
  }
}
