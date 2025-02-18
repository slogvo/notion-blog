<script setup lang="ts">
const { navigationItems } = useHeaderNavigation();
</script>

<template>
  <!-- Navigation -->
  <nav class="hidden md:flex items-center space-x-4 lg:space-x-6">
    <NuxtLink
      v-for="item in navigationItems"
      :key="item.href"
      :to="item.href"
      class="text-sm font-medium transition-colors hover:text-primary dark:text-white"
      active-class="text-primary"
    >
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>
