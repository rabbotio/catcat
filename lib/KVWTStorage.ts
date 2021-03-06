class KVWTStorage implements IKVStorage {
  _mem = null

  constructor(wtStorage) {
    this._mem = wtStorage
  }

  async getItem(key) {
    return new Promise((resolve, reject) => {
      this._mem.get((err, data) => {
        if (err) return reject(err)
        return data ? resolve(data[key]) : null
      })
    })
  }

  async setItem(key, value) {
    // Use call back to prevent async race condition
    return new Promise((resolve, reject) => {
      this._mem.get((err, data) => {
        if (err) return reject(err)

        // { '123': {senderId, commands} }
        data = data || {}
        // {senderId, commands}
        data[key] = data[key] || {}
        Object.assign(data[key], value)

        this._mem.set(data, (err) => {
          if (err) return reject(err)
          return resolve(data)
        })
      })
    })
  }
}

module.exports = KVWTStorage
