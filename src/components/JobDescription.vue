<template>
  <span class="ml-1" v-if="showDescription">{{ job.description }}</span>
  <span class="ml-1" v-else>...</span>
</template>

<script lang="ts">
import { JobInterface } from "@/interfaces/jobs.interface";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    job: {
      type: Object as () => JobInterface,
      required: true
    },
    showDescription: {
      type: Boolean,
      default: false
    }
  }
});
</script>
