<template>
  <h1>Vue Infinity Scroll</h1>

  <div class="students">
    <template v-for="student in retrievedStudents" :key="student.studentKey">
      <div class="student">
        <div class="student__name">{{ student.name }}</div>
      </div>
    </template>
    <button @click="loadMore">Load</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CommonApi from '@/api/CommonApi';
import { BasePaginationRequest } from '@/model/BaseModel';
import { Student } from '@/model/CommonModel';

export default defineComponent({
  async setup() {
    const paginationRequest: BasePaginationRequest = {
      page: 1,
      size: 10,
    };
    const retrievedStudents = ref<Student[]>([]);

    const { result } = await CommonApi.retrieveStudents(paginationRequest);
    retrievedStudents.value = result.contents;

    const loadMore = async () => {
      paginationRequest.page += 1;
      const { result } = await CommonApi.retrieveStudents(paginationRequest);
      retrievedStudents.value.push(...result.contents);
    };

    return {
      retrievedStudents,
      loadMore,
    };
  },
  emits: [],
});
</script>

<style>
h1 {
  text-align: center;
}

.students {
  margin: 20px;
}

.student {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 80px;
  background-color: cornsilk;
}
</style>
