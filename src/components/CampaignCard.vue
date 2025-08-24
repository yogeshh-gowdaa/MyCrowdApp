<template>
  <article class="card">
    <img :src="cover" alt="" style="width:100%; height:160px; object-fit:cover; border-radius:12px;" />
    <h3 style="margin: 10px 0 6px 0">{{ title }}</h3>
    <p class="muted" style="min-height: 42px">{{ blurb }}</p>
    <div style="display:flex; justify-content:space-between; align-items:center; margin: 10px 0 6px 0">
      <small class="muted">Raised ₹{{ raised.toLocaleString() }} / ₹{{ goal.toLocaleString() }}</small>
      <small><strong>{{ percent }}%</strong></small>
    </div>
    <ProgressBar :value="percent" />
    <div style="display:flex; gap:8px; margin-top: 12px">
      <router-link :to="`/campaigns/${id}`" class="btn">View</router-link>
      <button class="btn ghost" @click="$emit('back')">Back this</button>
    </div>
  </article>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue'
import { computed } from 'vue'
const props = defineProps({
  id: [String, Number],
  title: String,
  blurb: String,
  cover: String,
  goal: Number,
  raised: Number
})
const percent = computed(() => Math.round((props.raised / props.goal) * 100))
</script>
