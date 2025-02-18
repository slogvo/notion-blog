<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll();

const progress = ref<number>(0);

const updateProgressIndicator = () => {
  const { documentElement, body } = document;
  const windowScroll = body.scrollTop || documentElement.scrollTop;
  const height = documentElement.scrollHeight - documentElement.clientHeight;
  progress.value = (windowScroll / height) * 100;
};

onMounted(() => {
  if (import.meta.client) {
    // init
    updateProgressIndicator();
    // scroll
    window.addEventListener("scroll", updateProgressIndicator);
  }
});
</script>

<template>
  <div>
    {{ y }}
    {{ progress }}
  </div>
</template>
