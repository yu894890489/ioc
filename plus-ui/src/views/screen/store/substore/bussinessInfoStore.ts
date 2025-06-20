import { defineStore } from 'pinia';
import { ref } from 'vue';

/**
 * 商业区域信息Store
 */
export const useBussinessInfoStore = defineStore('BussinessInfoStore', () => {
  // 商业区域信息数据
  const bussinessInfo = ref({
    // 商业区域总面积
    totalArea: '155338',
    // 已使用面积百分比
    usedAreaPercent: '65', 
    // 未使用面积百分比
    unusedAreaPercent: '35',
  });

  /**
   * 更新商业区域信息
   * @param newInfo 新的商业区域信息
   */
  const updateBussinessInfo = (newInfo: Partial<typeof bussinessInfo.value>) => {
    bussinessInfo.value = { ...bussinessInfo.value, ...newInfo };
  };

  return {
    bussinessInfo,
    updateBussinessInfo
  };
}); 