<script lang="ts">
import {PropType} from 'vue'
import {PageComputed} from 'vuepress-types'

export default {
  name: 'PageContainer',

  provide(this: {page: PageComputed}) {
    return {
      pageContext: this.page,
    }
  },

  props: {
    page: {type: Object as PropType<PageComputed>, required: true},
  },

  render(h) {
    return h('div', this.$slots.default)
  },
}
</script>
