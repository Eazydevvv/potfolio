<template>
    <div v-if="student">
      <h1>Student Details</h1>
      <p><strong>Name:</strong> {{ student.name }}</p>
      <p><strong>Age:</strong> {{ student.age }}</p>
      <p><strong>Class:</strong> {{ student.class }}</p>
    </div>
    <div v-else>
      <p>Student not found.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        student: null
      }
    },
    mounted() {
      let id = this.$route.params.id;
      let allInfo = JSON.parse(localStorage.getItem('allInfo')) || [];
      this.student = allInfo[id];
    }
  }
  </script>
  