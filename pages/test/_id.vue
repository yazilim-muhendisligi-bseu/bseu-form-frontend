<template lang="pug">
div
  h1 {{ test.title }}
  div Bu testte {{ test.questions.length }} adet soru vardır. Başlamak için aşağıdaki butona tıklayın.
  v-btn.mt-8(color="green") Başla
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Test",
  data() {
    return {
      test: {
        title: "",
        questions: [],
      },
    };
  },
  async fetch() {
    this.test = await this.$store.dispatch(
      "getTestById",
      this.$route.params.id
    );
  },
};
</script>