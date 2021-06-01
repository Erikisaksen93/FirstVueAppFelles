<template>
  <div>
    <ul class="list">
      <li
        v-for="student in students"
        :key="student.id"
        @click="selectStudent(student)"
      >
        {{ student.firstName }}
      </li>
    </ul>
    <Student v-if="selectedStudent" :student="selectedStudent" />
  </div>
</template>

<script>
import Student from "./Student.vue";
import student from "./import.js";
export default {
  components: { Student },
  name: "List",
  props: {
    msg: String,
  },
  data() {
    return {
      students: { ...student },
      selectedStudent: undefined,
    };
  },
  methods: {
    selectStudent(student) {
      this.selectedStudent = student;
    },
  },
};
</script>

<style scoped>
.list {
  background-color: bisque;
}

.list > li:hover {
  background-color: burlywood;
}
</style>

