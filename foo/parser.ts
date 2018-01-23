const getParams = (messageText, commandLength = 1) => messageText.substring(commandLength, messageText.length).trim().toUpperCase().split(' ')

const CLAZZ = {
  '.': 'history',
  '=': 'wallet',
  '$': 'price',
  '^': 'portfolio'
}

const METHOD = {
  '+': 'add',
  '-': 'remove'
}

const toCommand2 = (messageText: string): Command => {
  messageText = messageText.trim()

  const firstChar = messageText.charAt(0)
  const secondChar = messageText.charAt(1)

  const clazz = CLAZZ[firstChar] || null
  const method = METHOD[secondChar] || null

  return {
    clazz,
    method,
    params: getParams(messageText, method ? 2 : 1)
  }
}

const toCommand = (messageText: string): Command => {
  messageText = messageText.trim()

  const firstChar = messageText.charAt(0)
  const secondChar = messageText.charAt(1)

  console.log(toCommand2(messageText))

  // TODO : deprecate this
  switch (firstChar) {
    // `.` = Repeat
    case '.': return {
      clazz: null,
      method: 'repeat'
    }

    // `^` = Portfolio
    case '^':
      // ^+
      if (secondChar === '+') {
        return {
          clazz: null,
          method: 'addPortfolio',
          params: getParams(messageText, 2)
        }
      } else if (secondChar === '-') {
        messageText = messageText.substring(1, messageText.length)
        return {
          clazz: null,
          method: 'removePortfolio',
          params: getParams(messageText, 2)
        }
      } else {
        return {
          clazz: null,
          method: null
        }
      }

    // `$` = Price
    case '$': return {
      clazz: null,
      method: 'getPrice',
      params: getParams(messageText)
    }

    // Not a command  
    default: return {
      clazz: null,
      method: null
    }
  }
}

export { toCommand, toCommand2 }