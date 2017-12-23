const getParams = (messageText, commandLength = 1) => messageText.substring(commandLength, messageText.length).trim().toUpperCase().split(' ')

const toCommand = (messageText: string): Command => {
  messageText = messageText.trim()

  const firstChar = messageText.charAt(0)
  const secondChar = messageText.charAt(1)
  switch (firstChar) {
    // `.` = Repeat
    case '.': return {
      method: 'repeat'
    }

    // `^` = Portfolio
    case '^':
      // ^+
      if (secondChar === '+') {
        return {
          method: 'addPortfolio',
          params: getParams(messageText, 2)
        }
      } else if (secondChar === '-') {
        messageText = messageText.substring(1, messageText.length)
        return {
          method: 'removePortfolio',
          params: getParams(messageText, 2)
        }
      } else {
        return {
          method: null
        }
      }

    // `$` = Price
    case '$': return {
      method: 'getPrice',
      params: getParams(messageText)
    }

    // Not a command  
    default: return {
      method: null
    }
  }
}

export { toCommand }