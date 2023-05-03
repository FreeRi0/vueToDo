<template>
  <div class="wrapper-todo">
    <h1 class="todo-title">To Do List</h1>
    <form @submit.prevent="addTask">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input
            v-model="newContent"
            class="input"
            type="text"
            placeholder="Добавить задачу"
          />
        </p>
        <p class="control">
          <button :disabled="!newContent" class="button is-info">
            Добавить
          </button>
        </p>
      </div>
    </form>
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="card mb-5"
      :class="{ 'has-background-success-light': todo.done }"
    >
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div
              class="column"
              :class="{ 'has-text-success line-through': todo.done }"
            >
              {{ todo.content }}
            </div>
            <div class="column is-5 has-text-right">
              <button
                @click="finishTask(todo.id)"
                class="button is-light"
                :class="todo.done ? 'is-success' : 'is-light'"
              >
                &#127937;
              </button>
              <button
                @click="deleteTask(todo.id)"
                class="button is-danger ml-2"
              >
                &#9760;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import

import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

//work

const todos = ref([
  {
    id: "1",
    content: "Прогулка в парке",
    done: false,
  },
  {
    id: "2",
    content: "Учеба",
    done: false,
  },
  {
    id: "3",
    content: "Тренировка в зале",
    done: true,
  },
  {
    id: "4",
    content: "Отправить дз преподу",
    done: false,
  },
  {
    id: "5",
    content: "Просмотр футбола в баре",
    done: true,
  },
]);

//add task

const newContent = ref("");

const addTask = () => {
  const newTask = {
    id: uuidv4(),
    content: newContent.value,
    done: true,
  };
  todos.value.unshift(newTask);
  newContent.value = "";
};

//delete Task

const deleteTask = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

//finish Task

const finishTask = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  todos.value[index].done = !todos.value[index].done;
};
</script>

<style>
@import "bulma/css/bulma.min.css";
.wrapper-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0px auto;
}

.todo-title {
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
}

.line-through {
  text-decoration: line-through;
}

.column {
}
</style>
