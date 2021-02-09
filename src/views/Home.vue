<template>
  <navbar />
  <div class="container">
    <section class="section">
      <resume>
        <jobs class="my-5" :jobs="jobs" :currentIndex="currentIndex" />
        <keyboard />
      </resume>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useJobs from "@/use/useJobs";
import Keyboard from "@/components/Keyboard.vue";
import Jobs from "@/components/Jobs.vue";
import Navbar from "@/components/Navbar.vue";
import Resume from "@/components/Resume.vue";

export default defineComponent({
  name: "PageHome",
  components: {
    Navbar,
    Jobs,
    Keyboard,
    Resume
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
