import { defineStore } from 'pinia';
import { ref } from 'vue';

/**
 * 绿化区域信息store
 */
export const useGreenInfoStore = defineStore('GreenInfoStore', () => {
  // 绿化区域信息数据
  const greenInfo = ref({
    // 绿化区域总面积
    totalArea: '155338',
    // 已使用面积百分比
    usedAreaPercent: '65', 
    // 未使用面积百分比
    unusedAreaPercent: '35',
  });

  /**
   * 更新绿化区域信息
   * @param newInfo 新的绿化区域信息
   */
  const updateGreenInfo = (newInfo: Partial<typeof greenInfo.value>) => {
    greenInfo.value = { ...greenInfo.value, ...newInfo };
  };

  return {
    greenInfo,
    updateGreenInfo
  };
}); 