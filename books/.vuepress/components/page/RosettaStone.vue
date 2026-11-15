<template>
  <DataTable :data="qualities" :columns="columns" />
</template>

<script lang="ts">
import DataTable from '../block/DataTable.vue'

import {columns} from '../../artifacts/rosetta-stone/columns.json'
import {qualities} from '../../artifacts/rosetta-stone/qualities.json'

export default {
  name      : 'RosettaStone',
  components: {DataTable},

  data() {
    return {qualities, columns}
  },
}
</script>
