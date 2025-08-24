<template>
  <section class="container">
    <h1>Create a campaign</h1>
    <form class="card" @submit.prevent="submit" style="display:grid; gap:12px;">
      <label>Title <input v-model="title" required class="card" style="padding:10px; width:100%; background:transparent; color:inherit; border:1px solid rgba(255,255,255,.12); border-radius:10px;"></label>
      <label>Short description <textarea v-model="blurb" required rows="3" class="card" style="padding:10px; width:100%; background:transparent; color:inherit; border:1px solid rgba(255,255,255,.12); border-radius:10px;"></textarea></label>
      <label>Goal (₹) <input v-model.number="goal" type="number" min="1000" step="500" required class="card" style="padding:10px; width:100%; background:transparent; color:inherit; border:1px solid rgba(255,255,255,.12); border-radius:10px;"></label>
      <label>Cover image URL <input v-model="cover" type="url" placeholder="https://..." class="card" style="padding:10px; width:100%; background:transparent; color:inherit; border:1px solid rgba(255,255,255,.12); border-radius:10px;"></label>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <router-link to="/campaigns" class="btn ghost">Cancel</router-link>
        <button class="btn">Create</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCampaigns } from '../store/campaigns'

const title = ref('')
const blurb = ref('')
const goal = ref(500000)
const cover = ref('https://picsum.photos/seed/new/800/500')
const router = useRouter()
const store = useCampaigns()

function submit() {
  const id = store.createCampaign({ title: title.value, blurb: blurb.value, goal: goal.value, cover: cover.value, owner: 'You' })
  router.push(`/campaigns/${id}`)
}
</script>
