require('isomorphic-fetch')

const postJSON = (uri, body = {}) =>
  fetch(uri, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    if (response.status >= 400) throw new Error('Bad response from server')
    return response.json()
  })

module.exports = { postJSON }
