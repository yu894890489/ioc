import { defineStore } from 'pinia';
import { ref } from 'vue';

/**
 * 办公区域信息Store
 */
export const useOfficeInfoStore = defineStore('OfficeInfoStore', () => {
  const officeInfo = ref({
    totalArea: '155338',
    usedAreaPercent: '65',
    unusedAreaPercent: '35'
  });
  return {
    officeInfo
  };
});
