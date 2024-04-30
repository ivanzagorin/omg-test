<template>
  <div class="number-item" v-observe-visibility="changeVisibilityHandler">
    {{ number }}
  </div>
</template>

<script lang="ts" setup>
import type { NumberItemProps } from './types'

const props = defineProps<NumberItemProps>()

const emit = defineEmits(['changeVisibility'])

const changeVisibilityHandler = (isVisible: boolean) => {
  emit('changeVisibility', { isVisible, id: props.id })
}
</script>

<style lang="scss" scoped>
@import './style';
</style>
