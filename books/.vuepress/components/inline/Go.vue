<template>
  <a :href="$withBase(to)"><slot /></a>
</template>

<script lang="ts">
export default {
  name: 'Go',

  props: {
    to: {type: String, default: ''},
  },
}
</script>
