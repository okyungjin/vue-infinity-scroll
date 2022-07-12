<template>
  <Suspense>
    <HomeView />
    <template #fallback> Suspense Loading... </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeView from '@/views/HomeView.vue';

export default defineComponent({
  components: {
    HomeView,
  },
});
</script>
