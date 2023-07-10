import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('counter', () => {
    const token = ref(0)
    const getToken = computed(() => token.value)
    function setToken(token) {
        this.token = token
    }
    return { token, getToken, setToken }
})
