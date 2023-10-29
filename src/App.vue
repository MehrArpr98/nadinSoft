<template>
  <app-header />

  <app-sidebar />

  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">

import AppSidebar from "./components/Sidebar.vue";
import AppHeader from "./components/Header.vue";

</script>
