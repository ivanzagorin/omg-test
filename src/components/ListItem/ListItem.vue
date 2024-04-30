<template>
  <div class="horizontal">
    <div class="horizontal-list">
      <NumberItem
        v-for="element in elements"
        :key="element.id"
        v-bind="element"
        @change-visibility="changeVisibilityHandler"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import type { Ref } from 'vue'
import NumberItem from '@/components/NumberItem'
import type { INumberItem } from './types'
import { getRandomNumber } from '@/utils/helpers'

const elements: Ref<Array<INumberItem>> = ref([])

onBeforeMount(() => {
  let randNumber = getRandomNumber()
  while (randNumber < 10) randNumber = getRandomNumber()
  elements.value = Array.from(Array.from({ length: randNumber }, (_, i) => i + 1)).map(
    (number) => ({
      id: number,
      number,
      isVisible: false
    })
  )
  setRandomNumber()
})

const changeVisibilityHandler = ({ isVisible, id }: { isVisible: boolean; id: number }) => {
  const element = elements.value.find((element) => element.id === id)
  if (!element) return
  element.isVisible = isVisible
}

const setRandomNumber = () => {
  setInterval(() => {
    const visibleElements = elements.value.filter((element) => element.isVisible)
    if (!visibleElements.length) return
    const randomIndex = Math.floor(Math.random() * visibleElements.length)
    visibleElements[randomIndex].number = getRandomNumber()
  }, 1000)
}
</script>

<style lang="scss" scoped>
@import './style';
</style>
