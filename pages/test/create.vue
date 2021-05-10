<template lang="pug">
v-form(v-model="valid", ref="form")
  .d-flex.justify-space-between.align-end
    v-text-field(
      label="Başlık",
      v-model="title",
      hide-details="auto",
      :rules="[rules.required]"
    )
    v-btn(color="green", @click="createTest") Sınav Oluştur
  .mt-8
    .d-flex.justify-space-between
      h2 Sorular
      v-btn(color="green", @click="addNewQuestion") 
        v-icon mdi-plus
        | Soru Ekle
    .mt-2(v-for="(question, index) in questions", :key="question.id")
      h2 Soru {{ index + 1 }}
      v-text-field(
        label="Başlık",
        v-model="question.title",
        hide-details="auto",
        :rules="[rules.required]"
      )
      v-radio-group(
        v-model="question.correctOption",
        :rules="[rules.requiredRadio]"
      )
        .d-flex.mt-4(
          v-for="(option, indexAnswer) in question.options",
          :key="option.id"
        )
          v-radio(:value="option")
          v-text-field(
            :label="asnwerLetters[indexAnswer]",
            v-model="option.title",
            :rules="[rules.required]"
          )
</template>

<script>
export default {
  name: "CreateTest",
  data() {
    return {
      valid: false,
      title: "",
      questions: [
        {
          title: "",
          options: [{ title: "" }, { title: "" }, { title: "" }, { title: "" }],
          correctOption: {},
        },
      ],
      asnwerLetters: ["A", "B", "C", "D"],
      rules: {
        required: (v) => !!v || "This field is required",
        requiredRadio: (v) => v.title === "" || !!v.title || "",
      },
    };
  },
  methods: {
    addNewQuestion() {
      const hasAnyEmptyTitle = this.questions.some((el) => !el.title);
      if (hasAnyEmptyTitle) return;
      this.questions.push({
        title: "",
        options: [{ title: "" }, { title: "" }, { title: "" }, { title: "" }],
        correctOption: {},
      });
    },
    async createTest() {
      const isValidate = this.$refs.form.validate();
      if (!isValidate) return;
      const payload = {
        title: this.title,
        questions: this.questions,
        category: { title: "Genel" },
      };
      await this.$store.dispatch("createTest", payload);
      this.$router.push("/");
    },
  },
};
</script>