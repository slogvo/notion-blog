<script setup lang="ts">
import type { ParagraphBlock } from "~/models";

const { blockProps } = defineProps<{
  blockProps: {
    type: ParagraphBlock;
    default: undefined;
  };
}>();
const paragraph = computed(() => {
  return (
    blockProps?.paragraph?.rich_text[0]?.text?.content ||
    blockProps?.paragraph?.rich_text[0]?.plain_text
  );
});
</script>
<template>
  <p>
    {{ paragraph }}
  </p>
</template>
