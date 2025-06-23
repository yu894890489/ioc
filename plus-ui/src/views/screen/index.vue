<template>
    <div class="w-full h-full m-0 p-0 relative root">
        <router-view />
    </div>
</template>
<script setup lang="tsx">

// 设计稿的基准尺寸
const designWidth = 1920
const designHeight = 1080

// 当前窗口尺寸
const width = ref(designWidth)
const height = ref(designHeight)

// 缩放比例
const scale = ref(1)

// 计算缩放比例的函数
const calculateScale = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight

    // 分别计算宽度和高度的缩放比例
    const widthScale = width.value / designWidth
    const heightScale = height.value / designHeight

    // 取较小的缩放比例，确保内容完全适应视口
    scale.value = Math.min(widthScale, heightScale)
}

// 页面加载时计算一次
onMounted(() => {
    // calculateScale()
    // // 监听窗口大小变化
    // window.addEventListener('resize', calculateScale)
})

// 组件卸载时清理事件监听
onUnmounted(() => {
    // window.removeEventListener('resize', calculateScale)
})

</script>
<style lang="scss" scoped>
.root {
    // 设置固定的设计稿尺寸
    // width: 1920px;
    // height: 1080px;
    // 背景透明
    // background-color: transparent !important;

    overflow: hidden;

    // 设置变换原点为左上角
    transform-origin: top left;
    transform: scale(v-bind(scale));

    // 如果需要居中显示，可以使用以下样式
    // transform-origin: center center;
    // position: absolute;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%) scale(v-bind(scale));
}
</style>