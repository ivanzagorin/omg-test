<template>
  <ul class="list">
    <transition-group name="fade-up">
      <div
        v-for="item in itemsToShow"
        :key="item"
        class="list-item"
      >
        {{ item }}
      </div>
    </transition-group>
  </ul> 
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, computed } from 'vue';
import type { Ref } from 'vue';

const countArray: Ref<number[]> = ref([]);
const numShow = ref(0);

const itemsToShow = computed(() => countArray.value.slice(0, numShow.value));

onBeforeMount(() => {
  const randNumber = Math.floor(Math.random() * 1000) + 1;
  countArray.value = Array.from(Array.from({length: randNumber}, (_, i) => i + 1));
  runAnimation();
});

const runAnimation = () => setInterval(() => numShow.value = numShow.value + 1, 100);
</script>

<style lang="scss" scoped>
@import './style';
</style>
