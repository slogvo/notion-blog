<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { Separator, type SeparatorProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes["class"]; label?: string }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'shrink-0 bg-gray-200 relative',
        props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
        props.class
      )
    "
  >
    <span
      v-if="props.label"
      :class="
        cn(
          'text-xs text-muted-gray-500d bg-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center',
          props.orientation === 'vertical'
            ? 'w-[1px] px-1 py-2'
            : 'h-[1px] py-1 px-2'
        )
      "
      >{{ props.label }}</span
    >
  </Separator>
</template>
