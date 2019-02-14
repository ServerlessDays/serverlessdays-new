function logout (logoutURL) {
  window.localStorage.removeItem('id_token')
  window.localStorage.removeItem('exp')
  window.localStorage.removeItem('iat')
  window.localStorage.removeItem('sub')
  // this.$router.push('/')
  window.location.href = logoutURL
  return true
}

function parseItem (arrItem) {
  const procArray = arrItem.split('=')
  const key = procArray[0]

  if (key === 'id_token') {
    const token = procArray[1]
    const decodedToken = parseJWT(procArray[1])
    return {
      token,
      decodedToken
    }
  } else {
    if (key === 'state') {
      return procArray[1]
    } else {
      return null
    }
  }
}

function login (hashString) {
  const hashArray = hashString.split('&')
  const itemArray = hashArray.map(parseItem)
  if (validateState(itemArray[1])) {
    if (validateNonce(itemArray[0].decodedToken.nonce)) {
      window.localStorage.setItem('id_token', itemArray[0].token)
      window.localStorage.setItem('exp', itemArray[0].decodedToken.exp)
      window.localStorage.setItem('iat', itemArray[0].decodedToken.iat)
      window.localStorage.setItem('sub', itemArray[0].decodedToken.sub)
      clearStateNonce()
      return itemArray[0].token
    } else {
      return false
    }
  } else {
    return false
  }
}

function parseJWT (token) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(window.atob(base64))
}

function validateState (state) {
  const validState = window.localStorage.getItem('state')
  return state === validState
}

function validateNonce (nonce) {
  const validNonce = window.localStorage.getItem('nonce')
  return nonce === validNonce
}

function clearStateNonce () {
  window.localStorage.removeItem('state')
  window.localStorage.removeItem('nonce')
  return true
}

function reqURL (options) {
  let resultURL = ''
  if (typeof options === 'object') {
    console.log(JSON.stringify(options))
    if (
      options.hasOwnProperty('domain') &&
      options.hasOwnProperty('client_id') &&
      options.hasOwnProperty('redirect_uri') &&
      options.hasOwnProperty('response_type') &&
      options.hasOwnProperty('scope')
    ) {
      resultURL =
        'https://' +
        options.domain +
        '/authorize?response_type=' +
        options.response_type +
        '&client_id=' +
        options.client_id +
        '&redirect_uri=' +
        options.redirect_uri

      resultURL += options.hasOwnProperty('connection')
        ? '&connection=' + options.connection
        : ''
      resultURL += options.hasOwnProperty('nonce')
        ? '&nonce=' + options.nonce
        : ''
      resultURL += options.hasOwnProperty('state')
        ? '&state=' + options.state
        : ''

      console.log(resultURL)
    } else {
      resultURL = ''
      console.log('Required parameters missing')
    }
  } else {
    resultURL = ''
    console.log('Invalid Object passed to function reqString')
  }

  return resultURL
}

function randomString (length) {
  var bytes = new Uint8Array(length)
  var random = window.crypto.getRandomValues(bytes)
  var result = []
  var charset =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~'
  random.forEach(function (c) {
    result.push(charset[c % charset.length])
  })
  return result.join('')
}

function genNonceState () {
  const nonce = randomString(64)
  const state = randomString(32)

  window.localStorage.setItem('state', state)
  window.localStorage.setItem('nonce', nonce)

  return {
    nonce,
    state
  }
}

export { genNonceState, reqURL, logout, login }
