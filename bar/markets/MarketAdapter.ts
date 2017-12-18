if (!Object.entries)
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };

class MarketAdapter {
  static parseBX(data): any {
    let result = {}
    const map = new Map(Object.entries(data))
    map.forEach(value => {
      const { bids, asks } = value.orderbook
      result[`${value.secondary_currency}_${value.primary_currency}`] = {
        price: value.last_price,
        change: value.change,
        volume: value.volume_24hours,
        bid_total: bids.total,
        bid_volume: bids.volume,
        bid_highest: bids.highbid,
        ask_total: asks.total,
        ask_volume: asks.volume,
        ask_highest: asks.highbid,
      }
    })

    return result
  }
}

module.exports = MarketAdapter