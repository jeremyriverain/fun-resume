<template>
  <keyboard-row v-for="row in keyboard" :key="row" :row="row" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useKeyboard from "@/use/useKeyboard";
import KeyboardRow from "@/components/KeyboardRow.vue";

export default defineComponent({
  name: "Keyboard",
  components: {
    KeyboardRow
  },
  setup() {
    const { keyboardRef: keyboard, pressKey } = useKeyboard();

    onMounted(() => {
      window.addEventListener("keypress", e => {
        pressKey(e.key.toUpperCase());
      });
    });

    return {
      keyboard
    };
  }
});
</script>
