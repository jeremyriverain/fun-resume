<template>
  <ul>
    <li class="py-1" v-for="(job, i) in jobs" :key="job.word">
      <job :show-description="currentIndex >= i" :job="job" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { JobInterface } from "@/interfaces/jobs.interface";
import Job from "@/components/Job.vue";

export default defineComponent({
  name: "Jobs",
  components: {
    Job
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
