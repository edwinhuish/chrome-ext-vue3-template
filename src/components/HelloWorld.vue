<template>
  <h1>{{ props.msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String,
})

const count = ref(0)
</script>

<script>
export default { name: 'HelloWorld' }
</script>
