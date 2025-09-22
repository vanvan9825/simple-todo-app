<template>
  <div class="fixed inset-0 min-h-screen h-screen w-full flex flex-col justify-center items-center p-0 m-0 box-border overflow-auto bg-gradient-to-tr from-cyan-400 via-purple-600 to-blue-500 animate-gradient bg-[length:400%_400%]">
    <!-- Navigation buttons -->
    <div class="mb-8 space-x-4">
      <button 
        @click="currentView = 'todo'" 
        class="px-6 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-100 transition-colors font-bold shadow-lg"
        :class="{ 'bg-purple-100': currentView === 'todo' }"
      >
        Todo
      </button>
      <button 
        @click="currentView = 'weather'" 
        class="px-6 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-100 transition-colors font-bold shadow-lg"
        :class="{ 'bg-purple-100': currentView === 'weather' }"
      >
        Weather
      </button>
    </div>
    
    <!-- Dynamic component rendering -->
    <component :is="currentComponent" />
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'
import WeatherApp from './components/WeatherApp.vue'

export default {
  components: { TodoApp, WeatherApp },
  data() {
    return {
      currentView: 'todo'
    }
  },
  computed: {
    currentComponent() {
      return this.currentView === 'todo' ? TodoApp : WeatherApp
    }
  }
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