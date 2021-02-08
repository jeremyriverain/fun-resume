<template>
  <button class="button is-info is-light">
    {{ key }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    pkey: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const key = computed(() => props.pkey.toUpperCase());

    return {
      key
    };
  }
});
</script>
