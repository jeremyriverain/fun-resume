<template>
  <div class="app-container">
    <button class="button is-info is-light">
      {{ key }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "KeyboardKey",
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

<style lang="sass" scoped>
.app-container
    padding: 0.1rem
    .button
        width: 40px
</style>
