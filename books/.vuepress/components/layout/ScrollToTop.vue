<template>
  <div id="scroll-to-top">
    <BackToTop />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScrollToTop',
}
</script>

<style lang="scss" scoped>
:deep(.go-to-top) {
  left: 2.5rem;
  right: auto;

  @media (width <= 959px) {
    display: block;
  }
}
</style>
