<template>
  <ul>
    <li class="py-1" v-for="(job, i) in jobs" :key="job.word">
      <span v-if="i === currentIndex">👉</span>
      <span v-else>❓</span>

      <job-description :show-description="currentIndex >= i" :job="job" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { JobInterface } from "@/interfaces/jobs.interface";
import JobDescription from "@/components/JobDescription.vue";

export default defineComponent({
  components: {
    JobDescription
  },
  props: {
    jobs: {
      type: Array as () => JobInterface[],
      required: true
    },
    currentIndex: {
      type: Number,
      required: false,
      default: null
    }
  }
});
</script>
