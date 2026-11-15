import Vue, {DefineComponent} from 'vue'
import {RouterLink, RouterView} from 'vue-router'
import {BField, BCheckbox, BTable, BTableColumn} from 'buefy/types/components'
import {KatexOptions} from 'katex'
import Layout from '../theme/layouts/Layout.vue'
import Img from '../components/block/Img.vue'
import Latex from '../components/block/Latex.vue'
import Link from '../components/inline/Link.vue'
import ButtonPrint from '../components/layout/ButtonPrint.vue'

// @see https://floating-vue.starpad.dev/legacy/v2/
export interface VPopoverProps {
  placement?: 'top-end'
  trigger?: 'click' | 'hover' | 'focus' | 'manual'
  container?: string | HTMLElement | false
}

export interface VKatexBindingValue {
  expression: string
  options?: KatexOptions
}

declare module 'vue' {
  export interface GlobalComponents {
    // VuePress, theme & router
    'Content': typeof Vue
    'Layout': typeof Layout
    'RouterLink': typeof RouterLink
    'router-link': typeof RouterLink
    'RouterView': typeof RouterView
    'router-view': typeof RouterView

    // 3rd-party components
    'BackToTop': typeof Vue
    'b-field': typeof BField
    'b-checkbox': typeof BCheckbox
    'b-table': typeof BTable
    'b-table-column': typeof BTableColumn
    'v-popover': DefineComponent<VPopoverProps>

    // 1st-party components
    'Img': typeof Img
    'Latex': typeof Latex
    'Link': typeof Link
    'ButtonPrint': typeof ButtonPrint
  }

  export interface GlobalDirectives {
    vKatex: Directive<HTMLElement, string | VKatexBindingValue>
  }
}
