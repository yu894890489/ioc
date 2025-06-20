<template>
    <Common name="personInOutInfo">
        <div class="w-full h-full relative flex flex-col gap-14px">
            <div class=" w-414px h-39px bg-[url('@/assets/screen/tongxingtaishi/today-inout-count-info-title.png')] 
                bg-[length:100%_100%]">

            </div>

            <div class=" w-414px h-85px bg-[url('@/assets/screen/tongxingtaishi/today-inout-count-info-bg.png')] 
                bg-[length:100%_100%] flex flex-nowrap items-center gap-33px pl-108px">

                <img src="@/assets/screen/tongxingtaishi/today-inout-count-info-divider.png" alt=""
                    class="w-4px h-76px">

                <!-- 进园人数区域 -->
                <div class="flex flex-col items-center justify-center">
                    <span class="text-12px text-[#b6c0c6] mb-6px">进园人数</span>
                    <div class="flex items-baseline ">
                        <span
                            class="text-24px text-[#fff] font-300px leading-none [text-shadow:0_0_1px_#ffffff,0_0_20px_#ffffff]">
                            {{ personInOutInfo.inCount }}
                        </span>
                        <span class="text-10px text-[#b6c0c6] ml-6px">(人)</span>
                    </div>
                </div>

                <img src="@/assets/screen/tongxingtaishi/today-inout-count-info-divider.png" alt=""
                    class="w-4px h-76px">

                <!-- 出园人数区域 -->
                <div class="flex flex-col items-center justify-center">
                    <span class="text-12px text-[#b6c0c6] mb-6px">出园人数</span>

                    <div class="flex items-baseline ">
                        <span class="text-24px text-[#fff] font-300px leading-none">
                            {{ personInOutInfo.outCount }}
                        </span>
                        <span class="text-10px text-[#b6c0c6] ml-6px">(人)</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-nowrap gap-20px">
                <!-- 圆环图区域 -->
                <div class="w-125px h-125px relative">
                    <!-- ECharts 容器 -->
                    <div ref="pieChartRef" class="w-full h-full z-2"></div>
                    <!-- 中心背景图 -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                               w-125px h-110px bg-[url('@/assets/screen/tongxingtaishi/today-inout-piechart-bg.png')] 
                               bg-[length:100%_100%] flex items-center justify-center z-1">
                        <!-- 中心图标可以在这里添加 -->
                    </div>
                </div>
                <div class="flex flex-col gap-25px">
                    <div class="w-269px bg-[url('@/assets/screen/tongxingtaishi/today-inout-count-info-detail-bg.png')] 
                bg-[length:100%_100%] flex flex-nowrap gap-25px items-center justify-center pb-2px">

                        <div>
                            <!-- 发光色块 -->
                            <div class="w-10px h-10px relative">
                                <!-- 主色块 -->
                                <div class="w-full h-full  bg-[#5cd0f7] 
                                shadow-[0_0_10px_#5cd0f7,0_0_20px_#5cd0f7,0_0_30px_#5cd0f7] 
                                border-2 border-[#5cd0f7] opacity-90"></div>
                            </div>
                        </div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.staff.label }}</div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.staff.percent }}%</div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.staff.value }}</div>
                    </div>
                    <div class="w-269px bg-[url('@/assets/screen/tongxingtaishi/today-inout-count-info-detail-bg.png')] 
                bg-[length:100%_100%] flex flex-nowrap gap-25px items-center justify-center pb-2px">

                        <div>
                            <!-- 发光色块 -->
                            <div class="w-10px h-10px relative">
                                <!-- 主色块 -->
                                <div class="w-full h-full  bg-[#ffee75] 
                                shadow-[0_0_10px_#ffee75,0_0_20px_#ffee75,0_0_30px_#ffee75] 
                                border-2 border-[#ffee75] opacity-90"></div>
                            </div>
                        </div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.guest.label }}</div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.guest.percent }}%</div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.guest.value }}</div>
                    </div>
                    <div class="w-269px bg-[url('@/assets/screen/tongxingtaishi/today-inout-count-info-detail-bg.png')] 
                bg-[length:100%_100%] flex flex-nowrap gap-25px items-center justify-center pb-2px">

                        <div>
                            <!-- 发光色块 -->
                            <div class="w-10px h-10px relative">
                                <!-- 主色块 -->
                                <div class="w-full h-full  bg-[#40ffdd] 
                                shadow-[0_0_10px_#40ffdd,0_0_20px_#40ffdd,0_0_30px_#40ffdd] 
                                border-2 border-[#40ffdd] opacity-90"></div>
                            </div>
                        </div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.other.label }}</div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.other.percent }}%</div>
                        <div class="text-18px text-[#dae2e6]">{{ personInOutInfo.detail.other.value }}</div>
                    </div>
                </div>
            </div>


        </div>
    </Common>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import * as echarts from 'echarts'
import Common from '../common/index.vue'
import { usePersonInOutInfoStore } from '../../store/';

// 修复变量名拼写错误
const personInOutInfoStore = usePersonInOutInfoStore()
const { personInOutInfo } = storeToRefs(personInOutInfoStore)

// 图表引用
const pieChartRef = ref<HTMLDivElement>()
// 图表实例
let chartInstance: echarts.ECharts | null = null

// 环形图内外径配置（可单独调整）
const ringConfig = {
    innerRadius: '65%',  // 内径 - 控制环的内圈大小
    outerRadius: '75%',  // 外径 - 控制环的外圈大小
}

/**
 * 计算总人数
 */
const totalCount = computed(() => {
    return parseInt(personInOutInfo.value.detail.staff.value) +
        parseInt(personInOutInfo.value.detail.guest.value) +
        parseInt(personInOutInfo.value.detail.other.value)
})

/**
 * 初始化环形图
 */
const initPieChart = () => {
    if (!pieChartRef.value) return

    // 销毁已存在的图表实例
    if (chartInstance) {
        chartInstance.dispose()
    }

    // 创建新的图表实例
    chartInstance = echarts.init(pieChartRef.value)

    // 配置图表选项
    const option = {
        // 取消默认的图例
        legend: {
            show: false
        },
        // 系列数据
        series: [
            {
                type: 'pie',
                radius: [ringConfig.innerRadius, ringConfig.outerRadius], // 使用配置的内外半径
                center: ['50%', '50%'], // 圆心位置
                avoidLabelOverlap: false,
                // 🎯 扇形间隙配置 - 控制相邻扇形之间的空隙大小
                padAngle: 0.05, // 间隙角度，单位：弧度（0.01-0.1 合适，数值越大间隙越大）
                // 取消标签显示
                label: {
                    show: false
                },
                // 取消引导线
                labelLine: {
                    show: false
                },
                // 数据 - 使用detail中的三种人员类型，添加发光特效
                data: [
                    {
                        value: parseInt(personInOutInfo.value.detail.staff.value),
                        name: personInOutInfo.value.detail.staff.label,
                        itemStyle: {
                            // 🎨 渐变色配置 - 创建从浅到深的绿色渐变效果
                            color: {
                                type: 'linear',              // 渐变类型：线性渐变（还可选择 'radial' 径向渐变）
                                x: 0,                        // 渐变起始点 X 坐标（0 = 左边）
                                y: 0,                        // 渐变起始点 Y 坐标（0 = 上边）
                                x2: 1,                       // 渐变结束点 X 坐标（1 = 右边）
                                y2: 1,                       // 渐变结束点 Y 坐标（1 = 下边）
                                // 组合起来就是从左上角到右下角的对角线渐变
                                colorStops: [                // 渐变色断点数组
                                    { offset: 0, color: '#5cd0f7' }, // 渐变起始色：亮绿色（霓虹绿）
                                    { offset: 1, color: '#5cd0f7' }  // 渐变结束色：深绿色（增加层次感）
                                ]
                            },

                            // ✨ 发光特效配置 - 核心发光效果实现
                            shadowBlur: 20,              // 阴影模糊半径：数值越大发光范围越大（建议 15-30）
                            shadowColor: '#5cd0f7',      // 阴影颜色：与主色保持一致形成统一发光色调
                            shadowOffsetX: 0,            // 阴影水平偏移：0 表示不偏移，向四周均匀发光
                            shadowOffsetY: 0,            // 阴影垂直偏移：0 表示不偏移，避免形成投影效果

                            // 🔥 边框发光增强
                            borderColor: '#5cd0f7',      // 边框颜色：与主色一致，强化发光边缘
                            borderWidth: 2,              // 边框宽度：2px 提供明显的发光边框效果

                            // 🎭 透明度控制
                            opacity: 0.9                 // 透明度：0.9 轻微透明增加视觉层次感，避免过于刺眼
                        },
                        // 鼠标悬停时的发光增强效果
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 30,
                                shadowColor: '#5cd0f7',
                                borderWidth: 3,
                                opacity: 1
                            }
                        }
                    },
                    {
                        value: parseInt(personInOutInfo.value.detail.guest.value),
                        name: personInOutInfo.value.detail.guest.label,
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#ffee75' }, // 蓝色起点 - 访客人员
                                    { offset: 1, color: '#ffee75' }  // 蓝色终点
                                ]
                            },
                            // 发光效果 - 蓝色光晕
                            shadowBlur: 20,
                            shadowColor: '#ffee75',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            // 边框发光
                            borderColor: '#ffee75',
                            borderWidth: 2,
                            opacity: 0.9
                        },
                        // 鼠标悬停时的发光增强效果
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 30,
                                shadowColor: '#ffee75',
                                borderWidth: 3,
                                opacity: 1
                            }
                        }
                    },
                    {
                        value: parseInt(personInOutInfo.value.detail.other.value),
                        name: personInOutInfo.value.detail.other.label,
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#40ffdd' }, // 橙色起点 - 其他人员
                                    { offset: 1, color: '#40ffdd' }  // 橙色终点
                                ]
                            },
                            // 发光效果 - 橙色光晕
                            shadowBlur: 20,
                            shadowColor: '#40ffdd',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            // 边框发光
                            borderColor: '#40ffdd',
                            borderWidth: 2,
                            opacity: 0.9
                        },
                        // 鼠标悬停时的发光增强效果
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 30,
                                shadowColor: '#40ffdd',
                                borderWidth: 3,
                                opacity: 1
                            }
                        }
                    }
                ],
                // 🎬 初始化动画配置详解
                // ==============================
                
                // 🎭 动画类型：控制初始进场动画效果
                animationType: 'scale',         // 'scale': 缩放进场 | 'expansion': 扩展进场
                
                // 🎪 动画缓动函数：控制动画运动曲线
                animationEasing: 'elasticOut',  // 弹性缓出效果，类似弹簧回弹
                // 其他选项：'linear' 线性 | 'quadraticOut' 二次缓出 | 'cubicOut' 三次缓出
                //         'bounceOut' 弹跳效果 | 'backOut' 回退效果
                
                // ⏰ 动画延迟：每个扇形的进场延迟时间（毫秒）
                animationDelay: function (idx: number) {
                    return Math.random() * 1000; // 随机延迟 0-1000ms，创造错落有致的进场效果
                    // 也可以用：return idx * 200; // 按顺序延迟，每个扇形间隔200ms
                },
                
                // ⏱️ 动画持续时间：单个扇形动画的总时长（毫秒）
                animationDuration: 2000,       // 2秒完成动画，数值越大动画越慢
                
                // ==============================
                // 🎯 交互配置
                
                // 🖱️ 选中模式：鼠标点击选中效果
                selectedMode: 'single',         // 'single': 单选 | 'multiple': 多选 | false: 禁用选中
                
                // 📏 选中偏移：选中时扇形向外突出的距离（像素）
                selectedOffset: 15             // 15px 突出距离，营造选中反馈效果
            }
        ],
        // 工具提示
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: '#7ec7ff',
            borderWidth: 1,
            textStyle: {
                color: '#fff',
                fontSize: 12
            },
            formatter: '{b}: {c} ({d}%)',
            // 🎯 智能定位配置 - 解决提示框超出视口问题
            position: function (point: number[], params: any, dom: HTMLElement, rect: any, size: any) {
                // point: [鼠标x坐标, 鼠标y坐标]
                // size: {contentSize: [tooltip宽度, tooltip高度], viewSize: [视口宽度, 视口高度]}
                
                let x = point[0] + 10; // 默认在鼠标右侧10px
                let y = point[1] - 10; // 默认在鼠标上方10px
                
                // 📱 智能横向定位：防止右侧超出
                if (x + size.contentSize[0] > size.viewSize[0]) {
                    x = point[0] - size.contentSize[0] - 10; // 超出时放到鼠标左侧
                }
                
                // 📱 智能纵向定位：防止上下超出
                if (y < 0) {
                    y = point[1] + 10; // 上方超出时放到鼠标下方
                }
                if (y + size.contentSize[1] > size.viewSize[1]) {
                    y = size.viewSize[1] - size.contentSize[1] - 10; // 下方超出时贴底部
                }
                
                return [x, y];
            },
            // 🎨 额外样式美化
            extraCssText: 'box-shadow: 0 0 10px rgba(126, 199, 255, 0.5); border-radius: 4px;'
        }
    }

    // 设置图表选项
    chartInstance.setOption(option)
}

/**
 * 窗口大小改变时重新调整图表大小
 */
const handleResize = () => {
    if (chartInstance) {
        chartInstance.resize()
    }
}

// 监听数据变化，重新初始化图表
watch(() => personInOutInfo.value.detail, () => {
    if (chartInstance) {
        initPieChart()
    }
}, { deep: true, immediate: true })

// 组件挂载后初始化图表
onMounted(() => {
    nextTick(() => {
        initPieChart()
        // 监听窗口大小变化
        window.addEventListener('resize', handleResize)
    })
})

// 组件卸载前清理
onUnmounted(() => {
    if (chartInstance) {
        chartInstance.dispose()
        chartInstance = null
    }
    window.removeEventListener('resize', handleResize)
})

</script>
<style lang="scss" scoped></style>