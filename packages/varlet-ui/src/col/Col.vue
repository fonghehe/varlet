<template>
  <div
    :class="
      classes(
        n(),
        'var--box',
        [span, n(`--span-${span}`)],
        [offset, n(`--offset-${offset}`)],
        ...getSize('xs', xs),
        ...getSize('sm', sm),
        ...getSize('md', md),
        ...getSize('lg', lg),
        ...getSize('xl', xl)
      )
    "
    :style="{
      paddingLeft: toSizeUnit(padding.left),
      paddingRight: toSizeUnit(padding.right),
    }"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { isPlainObject, toNumber } from '../utils/shared'
import { props } from './props'
import { useRow } from './provide'
import { toSizeUnit } from '../utils/elements'
import type { Ref, ComputedRef } from 'vue'
import type { ColPadding, ColProvider, SizeDescriptor } from './provide'
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('col')

export default defineComponent({
  name: 'VarCol',
  props,
  setup(props) {
    const padding: Ref<ColPadding> = ref({ left: 0, right: 0 })
    const span: ComputedRef<number> = computed(() => toNumber(props.span))
    const offset: ComputedRef<number> = computed(() => toNumber(props.offset))
    const { row, bindRow } = useRow()

    const colProvider: ColProvider = {
      setPadding(pad: ColPadding) {
        padding.value = pad
      },
    }

    const getSize = (mode: string, size: string | number | SizeDescriptor | undefined) => {
      const classes: string[] = []

      if (!size) {
        return classes
      }

      if (isPlainObject(size)) {
        const { span, offset } = size
        span && classes.push(n(`--span-${mode}-${span}`))
        offset && classes.push(n(`--offset-${mode}-${offset}`))
      } else {
        classes.push(n(`--span-${mode}-${size}`))
      }

      return classes
    }

    watch([() => props.span, () => props.offset], () => {
      row?.computePadding()
    })
    call(bindRow, colProvider)

    return {
      n,
      classes,
      padding,
      toNumber,
      toSizeUnit,
      getSize,
      span,
      offset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './col';
</style>
