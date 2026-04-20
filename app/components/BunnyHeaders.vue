<script setup lang="ts">
const headers = useRequestHeaders([
  'cdn-requestcountrycode',
  'cdn-requestid',
  'cdn-pullzoneid',
  'cdn-loopcount',
])

const entries = computed(() => Object.entries(headers).filter(([, v]) => v))
</script>

<template>
  <section>
    <h2>Bunny CDN Headers</h2>
    <p v-if="entries.length === 0">No Bunny CDN headers detected (not running behind Bunny CDN).</p>
    <ul v-else>
      <li v-for="[name, value] in entries" :key="name">
        <code>{{ name }}</code>: {{ value }}
      </li>
    </ul>
  </section>
</template>
