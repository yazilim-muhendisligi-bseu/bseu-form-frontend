<template lang='pug'>
div
  .d-flex.justify-space-between.align-end
    h1 Tüm Testler
    v-btn(color="green", @click="$router.push('/test/create')") 
      v-icon mdi-plus
      | Test Oluştur
  v-card.mx-auto.my-12(v-for="test in tests", :key="test.id", color="red")
    v-card-title.d-flex.justify-space-between
      div
        b {{ test.title }}&nbsp
        span {{ '(' + test.questions.length + ' soru)' }}
      v-btn(@click="$router.push('/test/' + test._id)") Çöz
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["tests"]),
  },
  async fetch() {
    await this.$store.dispatch("getAllTests");
  },
};
</script>
