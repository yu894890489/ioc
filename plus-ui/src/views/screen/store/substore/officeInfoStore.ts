import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOfficeInfoStore = defineStore('OfficeInfoStore', () => {
  const officeInfo = ref({
    officeArea: '155338',
    usedAreaPercent: '65',
    unusedAreaPercent: '35'
  });
  return {
    officeInfo
  };
});
