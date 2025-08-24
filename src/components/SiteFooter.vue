<template>
  <footer style="margin-top: 64px; border-top: 1px solid rgba(255,255,255,.08)">
    <div class="container" style="display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap;">
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="/favicon.svg" width="20" height="20" alt="logo" />
        <span class="muted">© <span>{{ year }}</span> MyCrowdApp</span>
      </div>
      <div class="muted" style="display:flex; gap:12px;">
        <a href="https://example.com">Docs</a>
        <a href="https://example.com">Terms</a>
        <a href="https://example.com">Privacy</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
