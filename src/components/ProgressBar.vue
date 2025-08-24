<template>
  <div class="progress" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100" role="progressbar">
    <span :style="{ width: Math.min(100, Math.max(0, value)) + '%' }"></span>
  </div>
</template>

<script setup>
defineProps({ value: { type: Number, default: 0 } })
</script>
