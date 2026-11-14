<template>
  <img :class="[
         { 'disable-zoom': noZoom },
         { 'print-dont-center': printDontCenter },
         { 'print-fill': printFill }
       ]"
       :src="path ? $withBase('/images/' + path) : url ? url : ''"
       :alt="alt">
</template>

<script lang="ts">
export default {
  props: {
    path           : {type: String, default: ''},
    url            : {type: String, default: ''},
    alt            : {type: String, default: ''},
    noZoom         : {type: Boolean, default: false},
    printDontCenter: {type: Boolean, default: false},
    printFill      : {type: Boolean, default: false},
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

@media print {
  img {
    max-height: 55vh !important;
    display: block;
    margin-inline: auto;
  }

  .print-dont-center {
    margin-inline: 0;
  }

  .print-fill {
    max-height: 90vh !important;
  }
}
</style>
