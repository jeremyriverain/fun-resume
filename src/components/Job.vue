<template>
  <span v-if="!isGuessed">❓</span>
  <span v-else>✔️</span>
  <span class="ml-3" v-if="prefix.length > 0">{{ prefix }}</span>
  <span class="word px-3 is-size-4">{{ word }}</span>
  <span class="ml-1" v-if="suffix.length > 0">{{ suffix }}</span>
</template>

<script lang="ts">
import useKeyboard from "@/use/useKeyboard";
import { JobInterface } from "@/interfaces/jobs.interface";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Job",
  props: {
    job: {
      type: Object as () => JobInterface,
      required: true
    },
    showDescription: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const boundaryIndex = props.job.description
      .split("")
      .findIndex(e => e === "%");

    const prefix =
      boundaryIndex === 0 ? "" : props.job.description.slice(0, boundaryIndex);

    const suffix = props.job.description.slice(boundaryIndex + 2);

    const { keysPressed } = useKeyboard();

    const word = computed(() => {
      const result = props.job.word
        .split("")
        .map(char => {
          if ([`'`, " "].includes(char) || keysPressed.value[char] === true) {
            return char;
          }
          return "_";
        })
        .join("");
      return result;
    });

    const isGuessed = computed(() => {
      return word.value.split("").findIndex(v => v === "_") === -1;
    });

    return {
      prefix,
      suffix,
      word,
      isGuessed
    };
  }
});
</script>

<style lang="sass" scoped>
.word
  letter-spacing: 0.2rem
</style>
