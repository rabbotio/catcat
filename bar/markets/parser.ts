if (!Object.entries)
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };

class Parser {
  static parseBX(data): any {
    let result = {}
    const map = new Map(Object.entries(data))
    map.forEach(value => {
      result[`${value.secondary_currency}_${value.primary_currency}`] = {
        price: value.last_price,
        change: value.change,
        volume: value.volume_24hours,
        bids: value.orderbook.bids,
        asks: value.orderbook.asks,
      }
    })

    return result
  }
}

export default Parser