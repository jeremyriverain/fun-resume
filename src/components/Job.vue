<template>
  <span class="ml-1" v-if="showDescription" v-html="label" />
  <span class="ml-1" v-else>...</span>
</template>

<script lang="ts">
import { JobInterface } from "@/interfaces/jobs.interface";
import { defineComponent, computed } from "vue";
import Word from "@/components/Word.vue";

export default defineComponent({
  name: "Job",
  components: {
    // eslint-disable-next-line
    Word
  },
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
    const label = computed(() => {
      return props.job.description.replace("%%", '<word word="test"></word>');
    });

    return {
      label
    };
  }
});
</script>

<style lang="sass" scoped>
>>> .word
  letter-spacing: 1rem!important
</style>
