<template>
  <div>
    <pre>
        <input type="text" id="{{ clonedStudent }}" :placeholder="showStudent" />
    </pre>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    msg: String,
    student: Object,
  },
  computed: {
    clonedStudent() {
      return this.student;
    },
    showStudent() {
      return `${this.clonedStudent.firstName} ${this.clonedStudent.lastName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>