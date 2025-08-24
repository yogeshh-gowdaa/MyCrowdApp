<template>
  <header class="sticky">
    <div class="container" style="display:flex; align-items:center; gap:16px; justify-content:space-between;">
      <router-link to="/" style="display:flex; align-items:center; gap:10px;">
        <img src="/favicon.svg" width="28" height="28" alt="logo" />
        <strong>MyCrowdApp</strong>
      </router-link>
      <nav style="display:flex; gap:14px; align-items:center;">
        <router-link to="/how-it-works" class="muted">How it works</router-link>
        <router-link to="/campaigns" class="muted">Campaigns</router-link>
        <router-link to="/create" class="muted">Create</router-link>
        <router-link to="/dashboard" class="muted">Dashboard</router-link>
        <button class="btn">Start a campaign</button>
      </nav>
    </div>
  </header>
</template>
