<template>
  <div class="w-[400px] mx-auto p-8 bg-white/95 rounded-2xl shadow-lg text-center backdrop-blur-md">
    <h1 class="text-2xl text-black font-semibold mb-5">Todo App</h1>
    <div class="flex gap-3 mb-5">
      <InputText 
        v-model="newTodo" 
        @keyup.enter="addTodo" 
        placeholder="Add your new todo" 
        class="flex-1 p-3 border-2 border-gray-200 rounded-lg text-base transition duration-300 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 bg-white/90 text-black" 
      />
      <Button 
        label="Add" 
        @click="addTodo"
      />
    </div>
    <div v-if="todos.length" class="mt-5">
      <div 
        v-for="(todo, index) in todos" 
        :key="index" 
        class="flex justify-between items-center p-3 px-4 mb-3 bg-gray-50/90 rounded-lg border border-black/5 text-black transition duration-300 hover:translate-x-1 hover:shadow-md"
      >
        <span>{{ todo }}</span>
        <Button 
          label="Delete" 
          severity="danger"
          @click="removeTodo(index)" 
        />
      </div>
      <p class="mt-3 text-sm text-black font-medium">You have {{ todos.length }} pending task(s)</p>
      <Button 
        label="Clear All" 
        severity="secondary"
        class="w-full mt-2"
        @click="clearAll" 
      />
    </div>
    <p v-else class="text-sm text-black font-medium">No tasks pending</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const todos = ref([])
const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim())
    newTodo.value = ''
  }
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
}

const clearAll = () => {
  todos.value = []
}
</script>