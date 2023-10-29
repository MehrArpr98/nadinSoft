<template>
  <div class="profile-wrapper">
    <form v-on:submit.prevent="setProfile()">
      <div class="form-item">
        <svg width="32" height="25">
          <use href="../assets/imgs/name.svg#svg" id="profile-img" />
        </svg>
        <input
          type="text"
          id="search"
          :placeholder="$t('message.profile_name_placeholder')"
          v-model="profile.name"
        />
      </div>
      <div class="form-item">
        <svg width="32" height="25">
          <use href="../assets/imgs/theme.svg#svg" id="profile-img" />
        </svg>
        <select required v-model="profile.theme">
          <option value="" disabled selected>
            {{ $t("message.profile_theme_placeholder") }}
          </option>
          <option value="light">{{ $t("message.profile_theme0") }}</option>
          <option value="dark">{{ $t("message.profile_theme1") }}</option>
        </select>
      </div>
      <div class="form-item">
        <svg width="32" height="25">
          <use href="../assets/imgs/language.svg#svg" id="profile-img" />
        </svg>

        <select required v-model="profile.locale">
          <option value="" disabled>
            {{ $t("message.profile_locale_placeholder") }}
          </option>
          <option value="en">{{ $t("message.profile_locale0") }}</option>
          <option value="fa">{{ $t("message.profile_locale1") }}</option>
        </select>
      </div>

      <button>{{ $t("message.saveButton") }}</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useSettingStore } from "../stores/setting";

const settingStore = useSettingStore();

let defaultProfile = reactive({
  name: "",
  theme: "",
  locale: "",
});

const profile = reactive(settingStore.getData("profile", defaultProfile));

function setProfile() {
  alert("changes saved!");
  settingStore.setLocalStorage("profile", profile);
  window.location.reload();
}
</script>
