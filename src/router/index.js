import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import HowItWorks from '../pages/HowItWorks.vue'
import Campaigns from '../pages/Campaigns.vue'
import CampaignDetails from '../pages/CampaignDetails.vue'
import CreateCampaign from '../pages/CreateCampaign.vue'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/how-it-works', name: 'how', component: HowItWorks },
  { path: '/campaigns', name: 'campaigns', component: Campaigns },
  { path: '/campaigns/:id', name: 'campaign-details', component: CampaignDetails, props: true },
  { path: '/create', name: 'create', component: CreateCampaign },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
