import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  /** ref и reactive это наши states */
  const count = ref(0)

  /** computed это наши getters */
  const doubleCount = computed(() => count.value * 2)

  /** actions */
  const increment = () => count.value++;
  const decrement = () => count.value--;

  /** Возвращаем наши переменные / функции для того, чтобы мы могли их использовать в компонентах */
  return { count, doubleCount, increment, decrement }
})
