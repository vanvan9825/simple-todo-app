<template>
  <div class="fixed inset-0 min-h-screen h-screen w-full flex justify-center items-center p-0 m-0 box-border overflow-auto bg-gradient-to-tr from-cyan-400 via-purple-600 to-blue-500 animate-gradient bg-[length:400%_400%]">
    <TodoApp />
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
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  animation: gradient 15s ease infinite;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>