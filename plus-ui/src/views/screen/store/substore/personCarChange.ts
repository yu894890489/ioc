

import { defineStore } from 'pinia';
import { ref } from 'vue';

// 模拟数据 - 根据设计图的数据趋势
const chartData = {
    // X轴时间数据
    timeData: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
    // 今日入园车辆数据（绿色线）
    vehicleData: [50, 170, 140, 100, 180, 50, 75],
    // 今日入园访客数据（蓝色线）
    visitorData: [175, 80, 85, 150, 190, 200, 125]
};


export const usePersonCarChangeStore = defineStore('PersonCarChangeStore', () => {
    const personCarChange = ref(chartData)

    return {
        personCarChange
    }
})


