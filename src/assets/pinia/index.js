import { createPinia, defineStore } from 'pinia';

const pinia = createPinia(); // 创建 Pinia 实例

export const useStore = defineStore('store', {
    state: () => ({
        token: 1,
    }),
    actions: {
        setToken(token) {
            this.token = token;
        },
    },
    getters: {
        getToken() {
            return this.token;
        }
    }
});

export default pinia;