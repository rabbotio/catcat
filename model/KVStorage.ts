class KVStorage {
  private _mem = {}

  async getItem(key) {
    return this._mem[key]
  }

  async setItem(key, value) {
    this._mem[key] = value
    return value
  }
}

module.exports = KVStorage