<template>
  <HelloWorld :msg="data.message" />
</template>

<script setup>
import { reactive } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const data = reactive({
  message: 'demo message',
})
</script>
