require('isomorphic-fetch')

const jsonToQueryString = json => {
  let params = []
  for (var k in json) params.push(`${k}=${json[k]}`)
  return params.join('&')
}

const handleResponseError = response => {
  if (response.status >= 400) throw new Error('Bad response from server')
  return response.json()
}

const postJSON = (uri, body = {}) =>
  fetch(uri, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }).then(handleResponseError)

const getJSON = (uri, body = {}) =>
  fetch(`${uri}?${jsonToQueryString(body)}`, {
    headers: { 'Content-Type': 'application/json' }
  }).then(handleResponseError)

export { postJSON, getJSON }
