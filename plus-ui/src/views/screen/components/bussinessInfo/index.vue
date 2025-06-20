<template>
    <Common name="bussinessInfo" class="w-full h-full">

        <div class="w-full h-full flex flex-col gap-14px ">
            <div class="w-414px h-39px bg-[url('@/assets/screen/bussiness-area-title.png')] bg-[length:100%_100%]">

            </div>

            
            <TotalArea title="商业区总面积:" :total="bussinessInfo.totalArea" bg-url="@/assets/screen/bussiness-area-info.png"></TotalArea>

            <UseAreaDetail  :usedAreaPercent="bussinessInfo.usedAreaPercent"
                :unusedAreaPercent="bussinessInfo.unusedAreaPercent" />
        </div>

    </Common>
</template>
<script setup lang="ts">
import Common from '../common/index.vue'
import { storeToRefs } from 'pinia'
import { useBussinessInfoStore } from '../../store'
import TotalArea from '../subcomponents/totalArea.vue'


import UseAreaDetail from '../subcomponents/useAreaDetail.vue'  // 使用区域详情组件

const { bussinessInfo } = storeToRefs(useBussinessInfoStore())
</script>
<style scoped lang="scss"></style>