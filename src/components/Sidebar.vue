<template>
    <div class="sidebar">
    <div class="logo">
      <img src="../assets/imgs/logo.png" class="sidebar-img" alt="logo-img" />
      <span>{{ $t("message.logo_name") }}</span>
    </div>
    <router-link to="/">
      <svg width="26" height="25" class="sidebar-img">
        <use href="../assets/imgs/dashboard.svg#svg" id="sidebar-img" />
      </svg>
      <span> {{ $t("message.sidebar_item_dashboard") }}</span>
    </router-link>
    <router-link to="/todoes">
      <svg width="20" height="25" class="sidebar-img">
        <use href="../assets/imgs/todolist.svg#svg" id="sidebar-img" />
      </svg>
      <span> {{ $t("message.sidebar_item_todoes") }}</span>
    </router-link>
    <router-link to="/weather">
      <svg width="26" height="22" class="sidebar-img">
        <use href="../assets/imgs/cloudyday.svg#svg" id="sidebar-img" />
      </svg>
      <span>{{ $t("message.sidebar_item_weather") }}</span>
    </router-link>
    <router-link to="/profile">
      <svg width="26" height="25" class="sidebar-img">
        <use href="../assets/imgs/user.svg#svg" id="sidebar-img" />
      </svg>
      <span>{{ $t("message.sidebar_item_profile") }}</span>
    </router-link>
  </div>
</template>