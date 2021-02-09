<template>
  <div class="app-container">
    <button
      class="button"
      :class="{
        'is-success': isDirty && isValid,
        'is-danger': isDirty && !isValid,
        'is-info': !isDirty,
        'is-light': !isDirty
      }"
      @click="pressKey(key)"
    >
      {{ key }}
    </button>
  </div>
</template>

<script lang="ts">
import useKeyboard from "@/use/useKeyboard";
import useJobs from "@/use/useJobs";
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

    const { keysPressed, pressKey } = useKeyboard();
    const { listLetters } = useJobs();

    const isDirty = computed(() => {
      return keysPressed.value[key.value] === true;
    });

    const isValid = listLetters.has(key.value);

    return {
      key,
      pressKey,
      isDirty,
      isValid
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
