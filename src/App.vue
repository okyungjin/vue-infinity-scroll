<template>
  <h1>Vue Infinity Scroll</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonApi from '@/api/CommonApi';

export default defineComponent({
  async setup() {
    const res = await CommonApi.checkHealth();
    console.log(res);
  },
  emits: [],
});
</script>
