<template>
    <Common name="projectInfo">
        <div class="w-full h-full relative flex flex-col">
            <div class=" w-414px h-39px bg-[url('@/assets/screen/project-info-title.png')] bg-[length:100%_100%]">

            </div>

            <div
                class="w-414px h-203px mt-10px pl-15px pr-15px pt-20px pb-18px bg-[url('@/assets/screen/project-info-content-wrapper.png')] bg-[length:100%_100%] project-info-content-wrapper-text">

                <img src="@/assets/screen/project-info-content-icon.png" alt="图标"
                    class=" w-1.5rem align-middle inline-block">
                {{ projectInfo.description }}
            </div>

            <div class="grid grid-cols-2 gap-10px">
                <div v-for="(item, K, index) in projectInfo.detail" :key="K">
                    <!-- <div class="w-152px h-160px" :class="[
                    `bg-[url(${item.iconUrl})]`,
                    `bg-[length:100%_100%]`,
                ]"></div> -->
                    <div class="flex flex-nowrap items-center gap-13px">
                        <img :src="item.iconUrl" alt="图标" class="w-76px h-80px">

                        <div class="flex flex-col">
                            <span class="font-normal text-13px text-[#5b6c74]  leading-[18px] text-left">{{ item.label
                                }}</span>
                            <span
                                class="font-1px text-24px  text-[#f5f6f7] leading-7 tracking-[2px] text-left not-italic normal-case">{{
                                item.value }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Common>
</template>
<script setup lang="ts">
import Common from '../common/index.vue'
import { useProjectInfoStore } from '../../store/';
const projectInfoStore = useProjectInfoStore()
const { projectInfo } = storeToRefs(projectInfoStore)

</script>
<style lang="scss" scoped>
.project-info-content-wrapper-text {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 24px;
    letter-spacing: 2px;
    text-align: left;
    font-style: normal;
}
</style>