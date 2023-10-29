import { defineStore } from "pinia";
import { reactive, watch } from "vue";

export const useSettingStore = defineStore("setting", () => {
  let defaultSetting = reactive({
    name: "User",
    theme: "light",
    locale: "EN",
  });

  const setting = reactive(getData("profile", defaultSetting));

  watch(
    setting,
    () => {
      document.body.setAttribute("data-theme", setting.theme);

      document.body.classList.remove(...document.body.classList);
      document.body.classList.add(setting.locale);
    },
    { deep: true, immediate: true }
  );

  function getData(lsName: string, defaultData: object) {
    const pickedJson = JSON.parse(localStorage.getItem(lsName) || "{}");
    return Object.keys(pickedJson).length !== 0 ? pickedJson : defaultData;
  }
  function setLocalStorage(lsName: string, newData: object) {
    localStorage.setItem(lsName, JSON.stringify(newData));
  }

  return { setting, getData, setLocalStorage };
});
