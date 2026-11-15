<template>
  <section>
    <Navbar />

    <div class="main-container"
         :class="[className, $page.frontmatter.pageClass]"
         v-bind="{'data-font': font}">
      <main><Content /></main>

      <ScrollToTop />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface LayoutComponent extends Vue {
  font?: string
  className: string
}

export default {
  name: 'Layout',

  props: {
    className: {type: String, default: null},
  },

  computed: {
    font(this: LayoutComponent): string | null {
      return this.$frontmatter.customFont
    },
  },
}
</script>
