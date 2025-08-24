# MyCrowdApp (Vue 3 + Vite)

A clean **crowdfunding template** inspired by the idea of CrowdUp — but built from scratch with **Vue 3**, **Vue Router**, and **Pinia**. It ships with a modern UI, mock data, and fully working flows: browse campaigns, view details, create, and back.

## ✨ Features
- Vue 3 + Vite app with file-organized pages & components
- Beautiful dark UI with glass panels (no CSS framework required)
- Campaign listing, search, details view with progress, create campaign form
- Simple state management via Pinia, with in-memory mock data
- Accessible components (buttons, inputs, progress bar)

## 🔧 Tech Stack
- **Vue 3**
- **Vite**
- **Pinia**
- **Vue Router**

## 🚀 Quickstart
```bash
# 1) install deps
npm install

# 2) run dev server
npm run dev

# 3) build
npm run build
```

Then visit http://localhost:5173

## 📁 Structure
```
src/
  components/
    CampaignCard.vue
    HeaderNav.vue
    ProgressBar.vue
    SiteFooter.vue
  pages/
    CampaignDetails.vue
    Campaigns.vue
    CreateCampaign.vue
    Dashboard.vue
    Home.vue
    HowItWorks.vue
  router/
    index.js
  store/
    campaigns.js
  App.vue
  main.js
```

## 📝 Notes
- This is a **template** with mock data (no backend). Integrate your own API / payments as needed.
- All code is original and does not copy from the referenced project while keeping the same **concept**.
- License: MIT
