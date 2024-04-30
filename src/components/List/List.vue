<template>
  <ul class="list">
    <transition-group name="fade-up">
      <ListItem
        v-for="item in itemsToShow"
        :key="item"
        class="list-item"
      />
    </transition-group>
  </ul> 
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, computed } from 'vue';
import type { Ref } from 'vue';
import ListItem from '@/components/ListItem';
import { getRandomNumber } from '@/utils/helpers';

const LINE_HEIGHT = 92;

const countArray: Ref<number[]> = ref([]);
const numShow = ref(0);

const itemsToShow = computed(() => countArray.value.slice(0, numShow.value));

onBeforeMount(() => {
  const randNumber = getRandomNumber();
  countArray.value = Array.from(Array(randNumber).keys());
  runAnimation();
});

const runAnimation = () => setInterval(() => {
  const maxNumShow = Math.round(window.innerHeight / LINE_HEIGHT) + Math.round(window.scrollY / LINE_HEIGHT) + 5;
  if (numShow.value >= maxNumShow) return;
  numShow.value = numShow.value + 1;
}, 200);
</script>

<style lang="scss" scoped>
@import './style';
</style>
