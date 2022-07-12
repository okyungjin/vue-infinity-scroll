<template>
  <h1>Vue Infinity Scroll</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonApi from '@/api/CommonApi';
import { BasePaginationRequest } from '@/model/BaseModel';

export default defineComponent({
  async setup() {
    const paginationRequest: BasePaginationRequest = {
      page: 1,
      size: 10,
    };

    const res = await CommonApi.retrieveStudents(paginationRequest);
    console.log(res);
  },
  emits: [],
});
</script>
