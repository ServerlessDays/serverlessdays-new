import Vuex from 'vuex'

const state = () => {
  return new Vuex.Store({
    state: {
      auth: {
        domain: 'senzo.eu.auth0.com',
        client_id: 'MbdCI8GejKlIO4QB0Jv8DQaSmr23wxpj',
        scope: 'openid%20profile%20email',
        redirect_uri: 'http://localhost:3000/callback',
        response_type: 'id_token',
        state: '',
        nonce: '',
        logoutURL: 'https://senzo.eu.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3000&client_id=MbdCI8GejKlIO4QB0Jv8DQaSmr23wxpj'
      },
      nav: [
        { key: '2', path: '/pitch', name: 'Pitch' },
        { key: '3', path: '/docs', name: 'Documentation' },
        { key: '4', path: '/road', name: 'Roadmap' }
      ],
      token: ''
    }
  })
}

export default state
