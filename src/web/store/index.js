import Vuex from 'vuex'

const state = () => {
  return new Vuex.Store({
    state: {
      nav: [
        { key: '2', path: '/agenda', name: 'Agenda' },
        { key: '3', path: '/speakers', name: 'Speakers' },
        { key: '5', path: '/announcements', name: 'Announcements' },
        { key: '4', path: '/venue', name: 'Venue' },
        { key: '5', path: '/sponsors', name: 'Sponsors' },
        { key: '6', path: '/tickets', name: 'Tickets', cta: true }
      ]
    }
  })
}

export default state
