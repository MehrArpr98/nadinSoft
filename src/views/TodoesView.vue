<template>
  <div class="todoes-wrapper">
    <h3 class="todoes-title">{{ $t("message.todoes_title") }}</h3>
    <form v-on:submit.prevent="addToTodoes">
      <input
        type="text"
        v-model="newTodoText"
        :placeholder="$t('message.todoes_input_placeholder')"
      />
      <button>+</button>
    </form>
    <div class="todoes-item" v-for="todo in todoes">
      <span>{{ todo.text }}</span>
      <button @click="removeFromTodoes(todo.todoID)">
        <span class="sampah">
          <span></span>
          <i></i>
        </span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useSettingStore } from "../stores/setting";

type todo = { text: String; todoID: Number };
const settingStore = useSettingStore();
let defaultTodoes = reactive([
  {
    text: "task 1",
    todoID: 0,
  },
  {
    text: "task 2",
    todoID: 1,
  },
  {
    text: "task 3",
    todoID: 2,
  },
]);

const todoes = reactive(settingStore.getData("todos", defaultTodoes));
const counter = ref(todoes[todoes.length - 1]?.todoID + 1);
let newTodoText = ref("");

function removeFromTodoes(id: number) {
  todoes.forEach((todo: todo, index: number) => {
    if (todo.todoID == id) todoes.splice(index, 1);
  });
  settingStore.setLocalStorage("todos", todoes);
}

function addToTodoes() {
  const newTodo = {
    text: newTodoText.value,
    todoID: counter.value,
  };
  todoes.push(newTodo);
  counter.value = counter.value + 1;
  newTodoText.value = "";

  settingStore.setLocalStorage("todos", todoes);
}
</script>
