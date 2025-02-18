<script setup lang="ts">
import { defineProps } from "vue";
import type { Heading1Block } from "~/models";

const { blockProps } = defineProps<{
  blockProps: {
    type: Heading1Block;
    default: undefined;
  };
}>();
const heading1 = computed(() => {
  return (
    blockProps?.heading_1?.rich_text[0]?.text?.content ||
    blockProps?.heading_1?.rich_text[0]?.plain_text
  );
});
</script>

<template>
  <h2 class="">{{ heading1 }}</h2>
</template>
