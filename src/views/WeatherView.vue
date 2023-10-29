<template>
  <div class="weather-wrapper" :class="{ horizontal: searchTerm.length > 0 }">
    <div class="weather-input-wrapper">
      <input
        type="text"
        id="search"
        :placeholder="$t('message.weather_input_placeholder')"
        v-model="searchTerm"
      />

      <ul v-if="searchCities.length">
        <li
          v-for="myCity in searchCities"
          :key="myCity.city"
          @click="selectedCity = myCity"
        >
          {{ myCity.city }}
        </li>
      </ul>
    </div>
    <div class="weather-details-wrapper">
      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>
      <div class="weather-details-text">
        <p>
          {{ $t("message.weather_city") }}:
          <span>{{ selectedCityDetailes.city }}</span>
        </p>
        <p>
          {{ $t("message.weather_temperature") }}:
          <span>{{ selectedCityDetailes.temperature }}</span>
        </p>
        <p>
          {{ $t("message.weather_windSpeed") }}:
          <span>{{ selectedCityDetailes.windspeed }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from "vue";
import cities from "../assets/cities";
import { useSettingStore } from "../stores/setting";

const settingStore = useSettingStore();

let searchTerm = ref("");
let defaultCity = ref({ city: "Tehran", lat: "35.7000", lng: "51.4167" });

const selectedCity = ref(settingStore.getData("city", defaultCity.value));

let selectedCityDetailes = ref({
  city: "",
  temperature: "",
  windspeed: "",
});

watch(
  selectedCity,
  (city) => {
    searchTerm.value = "";
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`
    )
      .then((response) => response.json())
      .then(
        (data) =>
          (selectedCityDetailes.value = {
            city: selectedCity.value.city,
            temperature:
              data.current_weather.temperature +
              data.current_weather_units.temperature,
            windspeed:
              data.current_weather.windspeed +
              data.current_weather_units.windspeed,
          })
      );
    settingStore.setLocalStorage("city", selectedCity.value);
  },
  { immediate: true, deep: true }
);

const searchCities = computed(() => {
  if (searchTerm.value === "") {
    return [];
  }
  return cities.filter((myCity) => {
    if (myCity.city.toLowerCase().includes(searchTerm.value.toLowerCase())) {
      return myCity;
    }
  });
});
</script>
