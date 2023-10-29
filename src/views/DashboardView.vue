<template>
  <div class="dashboard-wrapper">
    <div class="img-col">
      <img src="../assets/imgs/welcome.png" class="sidebar-img" alt="welcome-img" />
    </div>
    <div class="text-col">
      <h1 class="time-wrapper">
        {{ hour.toString().length == 1 ? "0" + hour : hour }} :
        {{ minute.toString().length == 1 ? "0" + minute : minute }}
      </h1>
      <h2 class="message-wrapper">
         {{ timeOfDay }},
        {{
          useSettingStore().setting.name
            ? useSettingStore().setting.name
            : "User"
        }}.
      </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useSettingStore } from "../stores/setting";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const timeOfDay = ref("");
const hour = ref(new Date().getHours());
const minute = ref(new Date().getMinutes());

setInterval(() => {
  hour.value = new Date().getHours();
  minute.value = new Date().getMinutes();
}, 1000);

watch(
  hour,
  () => {
    timeOfDay.value =
      hour.value >= 6 && hour.value < 12
        ? t("message.dashboard_msg_dayPart0")
        : hour.value >= 12 && hour.value < 18
        ? t("message.dashboard_msg_dayPart1")
        : hour.value >= 18 && hour.value < 23
        ? t("message.dashboard_msg_dayPart2")
        : hour.value == 23 || hour.value < 6
        ? t("message.dashboard_msg_dayPart3")
        : "";
  },
  { immediate: true }
);
</script>
