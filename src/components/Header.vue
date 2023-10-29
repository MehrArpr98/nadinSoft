<template>
  <div class="header">
    <span>
      <router-link to="/">
        <span> {{ $t("message.header_title") }}</span>
      </router-link>

      <router-link :to="{ name: String(route.name) }" v-if="route.path !== '/'">
        <span>
          &nbsp&nbsp>&nbsp&nbsp{{
            $t(`message.sidebar_item_${String(route.name)}`)
          }}</span
        >
      </router-link>
    </span>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
