<template>
  <div class="todo-app">
    <h1>Todo App</h1>
    <div class="input-container">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add your new todo" />
      <button @click="addTodo">+</button>
    </div>
    <div v-if="todos.length" class="todo-list">
      <div v-for="(todo, index) in todos" :key="index" class="todo-item">
        <span>{{ todo }}</span>
        <button @click="removeTodo(index)" class="delete-btn">Delete</button>
      </div>
      <p>You have {{ todos.length }} pending task(s)</p>
      <button @click="clearAll" class="clear-btn">Clear All</button>
    </div>
    <p v-else>No tasks pending</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TodoApp',
  setup() {
    // Khai báo dữ liệu phản hồi
    const todos = ref([]);
    const newTodo = ref('');

    // Thêm todo mới
    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push(newTodo.value.trim());
        newTodo.value = '';
      }
    };

    // Xóa todo tại index
    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    // Xóa tất cả todo
    const clearAll = () => {
      todos.value = [];
    };

    return { todos, newTodo, addTodo, removeTodo, clearAll };
  }
};
</script>

<style scoped>
.todo-app {
  width: 400px;
  margin: 0 auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

h1 {
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
  font-weight: 600;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  color: #000;
}

input:focus {
  outline: none;
  border-color: #8e44ad;
  box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.2);
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;
}

button:not(.delete-btn) {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
  color: #000;
  box-shadow: 0 4px 15px rgba(142, 68, 173, 0.2);
}

button:hover:not(.delete-btn) {
  background: linear-gradient(135deg, #8e44ad, #6c3483);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(142, 68, 173, 0.3);
}

.todo-list {
  margin-top: 20px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 12px;
  background: rgba(249, 249, 249, 0.9);
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  color: #000;
}

.todo-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.delete-btn {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: #000;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.delete-btn:hover {
  background: linear-gradient(135deg, #c0392b, #962d22);
  transform: scale(1.05);
}

.clear-btn {
  margin-top: 10px;
  width: 100%;
  background-color: #8e44ad;
  color: white;
}

.clear-btn:hover {
  background-color: #7d3c98;
}

p {
  margin-top: 10px;
  color: #000;
  font-size: 14px;
  font-weight: 500;
}
</style>