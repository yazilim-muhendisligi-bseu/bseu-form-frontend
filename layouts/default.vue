<template lang='pug'>
v-app(style="height: 100vh")
  v-app-bar(
    absolute,
    color="gray",
    elevate-on-scroll,
    scroll-target="#scrolling-techniques-7",
    style="height: 60px"
  )
    v-app-bar-nav-icon

    v-toolbar-title Title

    v-spacer

    v-btn
      v-icon mdi-magnify
      span Testler
  v-sheet#scrolling-techniques-7.overflow-y-auto(style="margin-top: 60px")
    v-container(style="height: 1500px")
      nuxt
  v-footer(:absolute="!fixed", app, style="height: 5vh")
    span &copy; {{ new Date().getFullYear() }}
    span &nbsp - &nbsp
    b BŞEÜ
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
