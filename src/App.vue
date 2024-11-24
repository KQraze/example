<script setup>
import {storeToRefs} from "pinia";
import {useCounterStore} from "@/stores/counter.js";

/** Если мы вытягиваем из Pinia переменные, которые хранят в себе ref, reactive, computed,
 * то мы должны обернуть вызов нашего стора в 'storeToRefs()' */
const { count, doubleCount } = storeToRefs(useCounterStore())

/** Иначе, если мы вытаскиваем из нашего стора функцию, то мы ничего не указываем
 * */
const { increment, decrement } = useCounterStore()
</script>

<template>
<div class="home-page">
  <div>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
  </div>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</div>
</template>

<style scoped>
.home-page {
  background: skyblue;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
