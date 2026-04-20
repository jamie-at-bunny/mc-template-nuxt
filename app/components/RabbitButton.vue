<script setup lang="ts">
const breed = ref<string | null>(null)
const greeting = ref<{ country: string | null; greeting: string } | null>(null)

async function getBreed() {
  const data = await $fetch<{ breed: string }>('/api/rabbit')
  breed.value = data.breed
}

async function getGreeting() {
  greeting.value = await $fetch('/api/greeting')
}
</script>

<template>
  <div class="actions">
    <div>
      <button @click="getBreed">Get Breed</button>
      <p v-if="breed">{{ breed }}</p>
    </div>

    <div>
      <button @click="getGreeting">Get Location Greeting</button>
      <p v-if="greeting">
        {{ greeting.greeting }}<span v-if="greeting.country"> from {{ greeting.country }}</span>!
      </p>
    </div>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
