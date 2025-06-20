
import { defineStore } from 'pinia';
import { ref } from 'vue';

/**
 * 今日人数进出统计store
 */
export const usePersonInOutInfoStore = defineStore('PersonInOutInfoStore', () => {

    const personInOutInfo = ref({
        inCount:'193',
        outCount:'102',
        detail:{
            staff:{
                label:"内部人员",
                percent:"55",
                value:'3217',
            },
            guest:{
                label:"访客人员",
                percent:"55",
                value:'3217',
            },
            other:{
                label:"其他人员",
                percent:"55",
                value:'3217',
            },
        }
    });
   
    return {
        personInOutInfo
    }
})