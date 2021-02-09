<template>
  <span class="word">{{ label }}</span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "Word",
  props: {
    word: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const label = computed(() => {
      return props.word.replace(/[A-Z]/g, "_");
    });

    return {
      label
    };
  }
});
</script>
