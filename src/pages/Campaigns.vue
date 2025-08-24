<template>
  <section class="container">
    <div style="display:flex; justify-content:space-between; align-items:end; gap:12px; flex-wrap:wrap;">
      <div>
        <h1>Campaigns</h1>
        <p class="muted">Discover causes making a difference.</p>
      </div>
      <input v-model="q" type="search" placeholder="Search campaigns..." class="card" style="padding:10px 14px; border-radius:999px; outline: none; border: 1px solid rgba(255,255,255,.08); color: inherit; background: transparent;">
    </div>
    <div class="grid grid-3" style="margin-top: 16px;">
      <CampaignCard v-for="c in filtered" :key="c.id"
        :id="c.id" :title="c.title" :blurb="c.blurb" :cover="c.cover"
        :goal="c.goal" :raised="c.raised" @back="back(c.id)" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCampaigns } from '../store/campaigns'
import CampaignCard from '../components/CampaignCard.vue'

const store = useCampaigns()
const q = ref('')
const filtered = computed(() => {
  const t = q.value.trim().toLowerCase()
  if (!t) return store.list
  return store.list.filter(c => (c.title + ' ' + c.blurb).toLowerCase().includes(t))
})
function back(id) { store.backCampaign(id, 5000) }
</script>
