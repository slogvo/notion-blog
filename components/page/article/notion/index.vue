<script setup lang="ts">
import { defineProps, computed } from "vue";
import type { NotionBlock } from "~/models";
import Heading1 from "./heading_1.vue";
import Paragraph from "./paragraph.vue";

const props = defineProps<{
  notionBlock: NotionBlock;
}>();

const blockType = computed(() => {
  switch (props.notionBlock.type) {
    case "heading_1":
      return Heading1;
    case "paragraph":
      return Paragraph;
    default:
      return "div"; // Default fallback
  }
});
</script>

<template>
  <component :is="blockType" :block-props="notionBlock" />
</template>
