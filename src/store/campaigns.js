import { defineStore } from 'pinia'

export const useCampaigns = defineStore('campaigns', {
  state: () => ({
    list: [
      { id: 'cl-education', title: 'CodeLab: Teach 1,000 Kids to Code', blurb: 'Help us run free weekend coding bootcamps across 5 cities.', cover: 'https://picsum.photos/seed/education/800/500', goal: 500000, raised: 312000, owner: 'Aarav K.' },
      { id: 'clean-water', title: 'Clean Water for Sundarbans', blurb: 'Build solar-powered water purification units for 3 villages.', cover: 'https://picsum.photos/seed/water/800/500', goal: 800000, raised: 540250, owner: 'Meera S.' },
      { id: 'open-source', title: 'Open-Source Indian NLP Toolkit', blurb: 'A fast, multilingual NLP toolkit for Indic languages.', cover: 'https://picsum.photos/seed/oss/800/500', goal: 300000, raised: 180750, owner: 'Dev Team' },
      { id: 'animal-rescue', title: 'Animal Rescue Van - Bengaluru', blurb: 'A dedicated rescue van to respond to distress calls.', cover: 'https://picsum.photos/seed/animal/800/500', goal: 450000, raised: 95000, owner: 'Paws United' },
    ]
  }),
  getters: {
    getById: (state) => (id) => state.list.find(c => c.id === id)
  },
  actions: {
    createCampaign(payload) {
      const id = payload.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      this.list.unshift({ id, raised: 0, ...payload })
      return id
    },
    backCampaign(id, amount) {
      const c = this.getById(id)
      if (!c) throw new Error('Campaign not found')
      c.raised += amount
    }
  }
})
