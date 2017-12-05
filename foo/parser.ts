class Parser {
  static toCommand = (messageText: string): Command => {
    messageText = messageText.trim()

    const firstChar = messageText.charAt(0)
    switch (firstChar) {
      // `.` = Repeat
      case '.': return {
        method: 'repeat'
      }

      // `$` = Price
      case '$': return {
        method: 'getPrice',
        params: messageText.substring(1, messageText.length).trim().toUpperCase().split(' ')
      }

      // Not a command  
      default: return {
        method: null
      }
    }
  }
}

module.exports = Parser