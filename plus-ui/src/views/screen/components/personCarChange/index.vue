<template>
    <Common name="personCardInfo">

        <div class="w-full h-full">
            <div class="w-414px h-39px bg-[url('@/assets/screen/personcard-info-title.png')] bg-[length:100%_100%]">

            </div>

            <div class="w-414px h-203px">
                <div ref="personCardInfoChart" class="w-full h-full"></div>
            </div>
        </div>
    </Common>
</template>

<script setup lang="ts">
import Common from '../common/index.vue'
import * as echarts from 'echarts';
import PersonPoint from '@/assets/screen/personcard-chart-person-point.png'
import CarPoint from '@/assets/screen/personcard-chart-car-point.png'

import { storeToRefs } from 'pinia'
import { usePersonCarChangeStore } from '../../store'


const props = defineProps({
    permission: {
        type: Object,
        default: () => ({})
    }
})

// 获取项目信息store
const { personCarChange } = storeToRefs(usePersonCarChangeStore())



const pointSize = 20

// 图表引用
const personCardInfoChart = ref();
// 图表实例
let chartInstance: echarts.ECharts | null = null;


/**
 * 初始化图表
 */
const initChart = () => {
    if (!personCardInfoChart.value) return;

    // 销毁已存在的图表实例
    if (chartInstance) {
        chartInstance.dispose();
    }

    // 创建新的图表实例
    chartInstance = echarts.init(personCardInfoChart.value);

    // 配置图表选项
    const option = {
        // 图表边距
        grid: {
            top: 20,
            left: 35,
            right: 20,
            bottom: 30,
            containLabel: false
        },
        // X轴配置
        xAxis: {
            type: 'category',
            data: personCarChange.value.timeData,
            axisLine: {
                show: false  // 隐藏X轴线
            },
            axisTick: {
                show: false  // 隐藏X轴刻度
            },
            axisLabel: {
                color: '#7ec7ff',  // X轴文字颜色
                fontSize: 12
            }
        },
        // Y轴配置
        yAxis: {
            type: 'value',
            min: 0,
            max: 300,
            interval: 50,  // 每50一个刻度
            axisLine: {
                show: false  // 隐藏Y轴线
            },
            axisTick: {
                show: false  // 隐藏Y轴刻度
            },
            axisLabel: {
                color: '#7ec7ff',  // Y轴文字颜色
                fontSize: 12
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1e3a5f',  // 网格线颜色
                    type: 'dashed',    // 虚线
                    width: 1
                }
            }
        },
        // 系列数据
        series: [
            {
                name: '今日入园车辆',
                type: 'line',
                data: personCarChange.value.vehicleData,
                // smooth: true,  // 平滑曲线（折线会变成曲线）
                lineStyle: {
                    color: '#00ff88',  // 绿色线条
                    width: 2
                },
                itemStyle: {
                    color: '#00ff88',  // 绿色点
                    borderColor: '#00ff88',
                    borderWidth: 2
                },
                // symbol: 'circle',  // 圆形标记点
                // symbolSize: 6
                symbol: `image://${CarPoint}`,  // 使用车辆图标
                symbolSize: [pointSize, pointSize],  // 调整图标尺寸 [宽度, 高度]
                // 区域填充（可选）折现与x周之间填充 
                // areaStyle: {
                //     color: {
                //         type: 'linear',
                //         x: 0,
                //         y: 0,
                //         x2: 0,
                //         y2: 1,
                //         colorStops: [
                //             { offset: 0, color: 'rgba(0, 255, 136, 0.3)' },
                //             { offset: 1, color: 'rgba(0, 255, 136, 0.05)' }
                //         ]
                //     }
                // }
            },
            {
                name: '今日入园访客',
                type: 'line',
                data: personCarChange.value.visitorData,
                // smooth: true,  // 平滑曲线
                lineStyle: {
                    color: '#00a8ff',  // 蓝色线条
                    width: 2
                },
                itemStyle: {
                    color: '#00a8ff',  // 蓝色点
                    borderColor: '#00a8ff',
                    borderWidth: 2
                },
                // symbol: 'circle',  // 圆形标记点
                // symbolSize: 6
                symbol: `image://${PersonPoint}`,  // 使用人员图标
                symbolSize: [pointSize, pointSize],  // 调整图标尺寸 [宽度, 高度]
                // 区域填充（可选）
                // areaStyle: {
                //     color: {
                //         type: 'linear',
                //         x: 0,
                //         y: 0,
                //         x2: 0,
                //         y2: 1,
                //         colorStops: [
                //             { offset: 0, color: 'rgba(0, 168, 255, 0.3)' },
                //             { offset: 1, color: 'rgba(0, 168, 255, 0.05)' }
                //         ]
                //     }
                // }
            }
        ],
        // 工具提示
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: '#7ec7ff',
            borderWidth: 1,
            textStyle: {
                color: '#fff',
                fontSize: 12
            },
            formatter: (params: any) => {
                let result = `<div style="margin-bottom: 5px;">${params[0].axisValue}</div>`;
                params.forEach((item: any) => {
                    result += `<div style="color: ${item.color};">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: ${item.color}; border-radius: 50%; margin-right: 8px;"></span>
                        ${item.seriesName}: ${item.data}
                    </div>`;
                });
                return result;
            }
        }
    };

    // 设置图表选项
    chartInstance.setOption(option);
};

/**
 * 窗口大小改变时重新调整图表大小
 */
const handleResize = () => {
    if (chartInstance) {
        chartInstance.resize();
    }
};

// 组件挂载后初始化图表
onMounted(() => {
    nextTick(() => {
        initChart();
        // 监听窗口大小变化
        window.addEventListener('resize', handleResize);
    });
});

// 组件卸载前清理
onUnmounted(() => {
    if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
    }
    window.removeEventListener('resize', handleResize);
});
</script>

<style lang="scss" scoped></style>