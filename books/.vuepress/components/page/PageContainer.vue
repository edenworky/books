<script lang="ts">
import {PropType, provide} from 'vue'
import {PageComputed} from 'vuepress-types'

export default {
  name : 'PageContainer',
  props: {
    page: {type: Object as PropType<PageComputed>, required: true},
  },
  setup(props) {
    provide('pageContext', props.page)
  },
  render(h) {
    return h('div', this.$slots.default)
  },
}
</script>
