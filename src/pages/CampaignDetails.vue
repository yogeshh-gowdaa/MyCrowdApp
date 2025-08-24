<template>
  <section class="container" v-if="campaign">
    <div class="grid" style="grid-template-columns: 1.2fr .8fr;">
      <div>
        <img :src="campaign.cover" alt="" style="width:100%; border-radius:12px; object-fit:cover; max-height: 420px;" />
        <h1 style="margin: 12px 0 6px 0">{{ campaign.title }}</h1>
        <p class="muted">{{ campaign.blurb }}</p>
      </div>
      <div class="card">
        <div class="muted">By {{ campaign.owner }}</div>
        <h2 style="margin: 6px 0">₹ {{ campaign.raised.toLocaleString() }}</h2>
        <small class="muted">raised of ₹{{ campaign.goal.toLocaleString() }} goal</small>
        <ProgressBar :value="percent" style="margin: 12px 0" />
        <div style="display:flex; gap: 8px;">
          <input v-model.number="amount" type="number" min="100" step="100" placeholder="Amount (₹)" class="card" style="flex:1; padding:10px 12px; border-radius:10px; outline:none; border:1px solid rgba(255,255,255,.12); background:transparent; color:inherit;">
          <button class="btn" @click="back">Back this</button>
        </div>
        <p v-if="error" style="color: var(--danger); margin-top:8px">{{ error }}</p>
      </div>
    </div>
  </section>
  <section class="container" v-else>
    <p class="muted">Campaign not found.</p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCampaigns } from '../store/campaigns'
import ProgressBar from '../components/ProgressBar.vue'

const route = useRoute()
const router = useRouter()
const store = useCampaigns()

const campaign = computed(() => store.getById(route.params.id))
const percent = computed(() => campaign.value ? Math.round((campaign.value.raised / campaign.value.goal) * 100) : 0)
const amount = ref(1000)
const error = ref('')

function back() {
  if (!campaign.value) return
  if (!amount.value || amount.value < 100) {
    error.value = 'Please enter at least ₹100'
    return
  }
  error.value = ''
  store.backCampaign(campaign.value.id, amount.value)
}
</script>
