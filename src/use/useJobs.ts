import { computed, ComputedRef, Ref, ref } from "vue";
import { JobInterface } from "@/interfaces/jobs.interface";

const jobs: Ref<JobInterface[]> = ref([
  {
    word: "MARAICHER",
    description: "%% dans des serres à tomates",
    dirty: false,
    valid: false
  },
  {
    word: "BRIOCHES",
    description: "Employé dans une usine de fabrication de %%",
    dirty: false,
    valid: false
  },
  {
    word: "MCDONALDS",
    description: "Equipier puis formateur chez %%",
    dirty: false,
    valid: false
  },
  {
    word: "VENDEUR",
    description: "%% chez Decathlon",
    dirty: false,
    valid: false
  },
  {
    word: "PROF DE FRANCAIS ET MATHS",
    description: "%% chez Acadomia",
    dirty: false,
    valid: false
  },
  {
    word: "MAISON D ARRET",
    description: "Éducateur sportif en %%",
    dirty: false,
    valid: false
  },
  {
    word: "PREPARATEUR PHYSIQUE",
    description: "%% au pôle France course au large",
    dirty: false,
    valid: false
  },
  {
    word: "COACH SPORTIF",
    description: "%%",
    dirty: false,
    valid: false
  }
]);

export default function() {
  const currentIndex: ComputedRef<number | null> = computed(() => {
    const firstDirty = jobs.value.findIndex(job => {
      return !job.dirty;
    });
    return firstDirty === -1 ? null : firstDirty;
  });

  return {
    jobs: computed(() => jobs),
    currentIndex
  };
}
