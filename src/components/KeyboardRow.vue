<template>
  <div class="row">
    <keyboard-key v-for="(val, key) in row" :key="key" :pkey="key" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { KeyboardRowInterface } from "@/interfaces/keyboard.interface";
import KeyboardKey from "@/components/KeyboardKey.vue";
export default defineComponent({
  name: "KeyboardRow",
  props: {
    row: {
      type: Object as () => KeyboardRowInterface,
      required: true
    }
  },
  components: {
    KeyboardKey
  }
});
</script>

<style lang="sass" scoped>
.row
    display: flex
    flex-wrap: wrap
    justify-content: center
</style>
