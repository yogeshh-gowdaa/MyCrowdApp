<template>
  <main>
    <section class="container hero">
      <div>
        <span class="chip">Community funding, reimagined</span>
        <h1 style="font-size:44px; line-height:1.1; margin:10px 0 8px 0">Launch ideas. Back causes. <br/>Make impact together.</h1>
        <p class="muted" style="max-width: 600px">
          MyCrowdApp is a minimal, fast crowdfunding template built with Vue 3. Create campaigns,
          share with your community, and track progress in real-time.
        </p>
        <div style="display:flex; gap:10px; margin-top: 16px;">
          <router-link to="/create" class="btn">Start a campaign</router-link>
          <router-link to="/campaigns" class="btn ghost">Browse campaigns</router-link>
        </div>
        <div style="display:flex; gap:20px; margin-top:18px" class="muted">
          <span>⚡ No wallet needed</span>
          <span>🧩 Modular components</span>
          <span>📱 Fully responsive</span>
        </div>
      </div>
      <div class="card">
        <img src="https://picsum.photos/seed/hero/900/500" style="width:100%; border-radius:12px; object-fit:cover" alt="hero"/>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:12px">
          <div class="card">
            <div class="muted">Active campaigns</div>
            <h2 style="margin:6px 0">1,248</h2>
          </div>
          <div class="card">
            <div class="muted">Total raised</div>
            <h2 style="margin:6px 0">₹ 9.3 Cr</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <h2>Trending now</h2>
      <div class="grid grid-3" style="margin-top: 12px;">
        <CampaignCard v-for="c in top3" :key="c.id"
          :id="c.id" :title="c.title" :blurb="c.blurb" :cover="c.cover"
          :goal="c.goal" :raised="c.raised" @back="back(c.id)" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useCampaigns } from '../store/campaigns'
import CampaignCard from '../components/CampaignCard.vue'

const store = useCampaigns()
const top3 = computed(() => store.list.slice(0,3))
function back(id) { store.backCampaign(id, 5000) }
</script>
