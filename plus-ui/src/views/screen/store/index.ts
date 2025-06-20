import { defineStore } from 'pinia';
import { ref } from 'vue';

import { usePersonCarChangeStore } from './substore/personCarChange';
import { useProjectInfoStore } from './substore/projectInfoStore';
import { useParkOverallInfoStore } from './substore/parkOverallInfoStore';
import { useOfficeInfoStore } from './substore/officeInfoStore';
import { useBussinessInfoStore } from './substore/bussinessInfoStore';

/**
 * 权限控制 控制组件的显示与隐藏
 */
export const useCommonStore = defineStore('CommonStore', () => {
  const permission = ref({
    personCardInfo: true,
    parkOverallInfo: true,
    projectInfo: true,
    officeInfo: true,
    bussinessInfo: true
  });
  return {
    permission
  };
});

/**
 * 导出子store
 */
export { usePersonCarChangeStore, useProjectInfoStore, useParkOverallInfoStore, useOfficeInfoStore, useBussinessInfoStore };
