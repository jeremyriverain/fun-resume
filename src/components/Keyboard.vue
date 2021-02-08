<template>
  <keyboard-row v-for="row in keyboard" :key="row" :row="row" class="mb-1" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useKeyboard from "@/use/useKeyboard";
import KeyboardRow from "@/components/KeyboardRow.vue";

export default defineComponent({
  components: {
    KeyboardRow
  },
  setup() {
    const { keyboardRef: keyboard } = useKeyboard();
    console.log(keyboard.value);

    return {
      keyboard
    };
  }
});
</script>
