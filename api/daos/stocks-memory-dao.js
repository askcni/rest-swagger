import Model from '../models/stock.model'
var mysql = require('mysql')

export default class StocksMemoryDAO {
  constructor () {
    this.connection = mysql.createConnection({
      host: '192.168.33.103',
      user: 'capillary',
      password: '123',
      database: 'validation'
    })
  }

  createStock (id, name, currentPrice, lastUpdate) {
    this.data.set(id, new Model(id, name, currentPrice, lastUpdate))
  }

  retrieveAll () {
    return Array.from(this.data.values())
  }

  retrieve (id) {
    if (this.data.has(id)) {
      return this.data.get(id)
    } else {
      throw new Error(`Stock with id ${id} not found`)
    }
  }

  update (id, lastUpdate) {
    if (this.data.has(id)) {
      const stock = this.data.get(id)
      stock.lastUpdate = lastUpdate
      return this.retrieve(stock.id)
    } else {
      throw new Error(`Stock with id ${id} not found`)
    }
  }

  create (stock) {
    if (this.data.has(stock.id)) {
      throw new Error(`An stock with id ${stock.id} already exists`)
    } else {
      this.createStock(stock.id, stock.name, stock.currentPrice, stock.lastUpdate)
      return this.retrieve(stock.id)
    }
  }
}
