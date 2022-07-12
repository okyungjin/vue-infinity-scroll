<template>
  <h1>Vue Infinity Scroll</h1>

  <div class="students">
    <template v-for="student in retrievedStudents" :key="student.studentKey">
      <div class="student">
        <div class="student__name">{{ student.name }}</div>
      </div>
    </template>
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

    const { result } = await CommonApi.retrieveStudents(paginationRequest);
    const retrievedStudents = ref<Student[]>(result.contents);

    return {
      retrievedStudents,
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
