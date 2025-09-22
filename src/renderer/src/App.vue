<template>
  <div class="app-container">
    <TodoApp/>
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'
// import '@fortawesome/fontawesome-free/css/all.css'; // Import toàn bộ icon

export default {
  components: { TodoApp }
}
</script>

<style>
.app-container {
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #00c4cc, #8e44ad, #007bff);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow: auto;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>