<template>
  <div class="container">
    <section class="section">
      <resume>
        <jobs class="my-5" :jobs="jobs" :currentIndex="currentIndex" />
        <keyboard />
        <progress-bar class="mt-5" />
      </resume>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useJobs from "@/use/useJobs";
import Keyboard from "@/components/Keyboard.vue";
import Jobs from "@/components/Jobs.vue";
import Resume from "@/components/Resume.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default defineComponent({
  name: "PageHome",
  components: {
    Jobs,
    Keyboard,
    Resume,
    ProgressBar
  },
  setup() {
    const { jobs: jobsRef, currentIndex: currentIndexRef } = useJobs();

    return {
      jobs: jobsRef.value,
      currentIndex: currentIndexRef.value
    };
  }
});
</script>
