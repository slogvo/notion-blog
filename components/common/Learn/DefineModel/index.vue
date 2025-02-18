<!-- Child.vue -->
<script setup>
const model = defineModel();

function update() {
  model.value++;
}
</script>

<template>
  <div>parent bound v-model is: {{ model }}</div>
</template>

<!-- Parent.vue -->
<Child v-model="count" />
