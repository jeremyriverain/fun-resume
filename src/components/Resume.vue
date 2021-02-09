<template>
  <article class="media">
    <figure class="media-left">
      <img
        v-lazy="require('@/assets/my_picture.jpg')"
        width="200"
        style="height:auto"
      />
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Jérémy Riverain</strong>
          <small class="ml-1"
            ><a href="https://twitter.com/jeremy_riverain"
              >@jeremy_riverain</a
            ></small
          >
          <br />
          Je suis Jérémy Riverain, consultant chez Zenika depuis le 1er
          février{{ labelYearZenika }}

          <br />
          J'ai {{ myAge }} ans. J'habite près de Brest, aux côtés de ma compagne
          et de ma fille de {{ myDaughterAge }}
          {{ myDaughterAge > 1 ? "ans" : "an" }}.

          <br />
          Avant d'arriver ici, j'ai été développeur
          <a href="https://www.geekco.fr/" target="_blank">freelance</a> puis
          développeur chez
          <a href="https://www.sentinellesduweb.com/" target="_blank"
            >les Sentinelles du Web</a
          >
          à Douarnenez.

          <br />
          J'y ai réalisé des applications web et mobiles, des back-office, des
          APIs.

          <br />
          Mon itinéraire est celui d'un passionné, d'un autodidacte ayant
          découvert tardivement la programmation.
        </p>
        <p class="mt-3">
          Avant de devenir développeur, j'ai exercé bien d'autres métiers, parmi
          lesquels ceux que je vais lister ci-après.
        </p>

        <p class="mt-3">
          <strong
            >Sauras-tu les deviner au travers de ce mini-jeu de pendu ?</strong
          >
          😉
        </p>
      </div>
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "Resume",
  setup() {
    const calculateAge = (birthday: Date) => {
      // birthday is a date
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const myAge = calculateAge(new Date(1986, 8, 19));
    const myDaughterAge = calculateAge(new Date(2019, 4, 5));

    const currentYear = new Date().getFullYear();

    const labelYearZenika = computed(() => {
      return currentYear === 2021 ? "." : " " + currentYear + ".";
    });

    return {
      myAge,
      myDaughterAge,
      labelYearZenika
    };
  }
});
</script>

<style lang="sass" scoped>
p
    margin-top: 0.5rem
@media (max-width:600px)
    .media
        display: block
    .media-left
        text-align: center
</style>
