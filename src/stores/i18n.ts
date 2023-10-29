import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      header_title: "APP BAR",
      logo_name: "NadinSoft",

      sidebar_item_dashboard: "Dashboard",
      sidebar_item_todoes: "Todoes",
      sidebar_item_weather: "Weather",
      sidebar_item_profile: "Profile",

      dashboard_msg_dayPart0: "Good Morning",
      dashboard_msg_dayPart1: "Good Afternoon",
      dashboard_msg_dayPart2: "Good Evening",
      dashboard_msg_dayPart3: "Good Night",

      todoes_title: "TODO list",
      todoes_input_placeholder: "Add a todo...",

      weather_city: "City",
      weather_temperature: "Temperature",
      weather_windSpeed: "Wind Speed",
      weather_input_placeholder: "Enter City",

      profile_name_placeholder: "Name",
      profile_theme0: "light",
      profile_theme1: "dark",
      profile_theme_placeholder: "Theme",
      profile_locale0: "EN",
      profile_locale1: "FA",
      profile_locale_placeholder: "Locale",
      saveButton: "Save",
    },
  },
  fa: {
    message: {
      header_title: "صفحه اصلی",
      logo_name: "نادین سافت",

      sidebar_item_dashboard: "داشبورد",
      sidebar_item_todoes: "لیست کارها",
      sidebar_item_weather: "وضعیت آب و هوا",
      sidebar_item_profile: "پروفایل",

      dashboard_msg_dayPart0: "صبح بخیر",
      dashboard_msg_dayPart1: "ظهر بخیر",
      dashboard_msg_dayPart2: "عصر بخیر",
      dashboard_msg_dayPart3: "شب بخیر",

      todoes_title: "لیست کارها",
      todoes_input_placeholder: "یک کار اضافه کنید...",

      weather_city: "شهر",
      weather_temperature: "دما",
      weather_windSpeed: "سرعت باد",
      weather_input_placeholder: "نام شهر را وارد کنید",

      profile_name_placeholder: "نام کاربر",
      profile_theme0: "روشن",
      profile_theme1: "تاریک",
      profile_theme_placeholder: "تم صفحه",
      profile_locale0: "انگلیسی",
      profile_locale1: "فارسی",
      profile_locale_placeholder: "زبان",
      saveButton: "ذخیره تغییرات",
    },
  },
};

let defaultProfile = {
  name: "",
  theme: "",
  locale: "",
};

const profileJson = JSON.parse(localStorage.getItem("profile") || '{}');
const profile = Object.keys(profileJson).length !== 0 ? profileJson : defaultProfile;


const i18n = createI18n({
  locale: profile.locale ? profile.locale : "en",
  legacy: false,
  fallbackLocale: profile.locale ? profile.locale : "en",
  messages,
});

export default i18n;
