<template>
  <section class="container">
    <h1>Your dashboard</h1>
    <p class="muted">Quick overview of your campaigns and contributions.</p>
    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); margin-top: 12px">
      <div class="card">
        <div class="muted">Active campaigns</div>
        <h2 style="margin:6px 0">{{ myCampaigns.length }}</h2>
      </div>
      <div class="card">
        <div class="muted">Total raised</div>
        <h2 style="margin:6px 0">₹ {{ totalRaised.toLocaleString() }}</h2>
      </div>
      <div class="card">
        <div class="muted">Average progress</div>
        <h2 style="margin:6px 0">{{ avgProgress }}%</h2>
      </div>
    </div>

    <h2 style="margin-top: 24px;">Your campaigns</h2>
    <div class="grid grid-3" style="margin-top: 12px;">
      <CampaignCard v-for="c in myCampaigns" :key="c.id"
        :id="c.id" :title="c.title" :blurb="c.blurb" :cover="c.cover"
        :goal="c.goal" :raised="c.raised" @back="() => {}" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCampaigns } from '../store/campaigns'
import CampaignCard from '../components/CampaignCard.vue'

const store = useCampaigns()
const myCampaigns = computed(() => store.list.filter(c => c.owner === 'You' || c.owner === 'Aarav K.'))
const totalRaised = computed(() => myCampaigns.value.reduce((s,c) => s + c.raised, 0))
const avgProgress = computed(() => {
  if (!myCampaigns.value.length) return 0
  const pct = myCampaigns.value.map(c => c.raised / c.goal * 100)
  return Math.round(pct.reduce((s,x)=>s+x,0)/pct.length)
})
</script>
