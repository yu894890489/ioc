
import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useOfficeInfoStore = defineStore('OfficeInfoStore', () => {
    const officeInfo = ref({
        officeArea: '155338',
    })
    return {
        officeInfo
    }
})

