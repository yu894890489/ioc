<template>
    <Common name="officeInfo" class="w-full h-full">

        <div class="w-full h-full flex flex-col gap-14px ">
            <div
                class="w-414px h-39px bg-[url('@/assets/screen/zongtitaishi/office-area-title.png')] bg-[length:100%_100%]">

            </div>
            <TotalArea class="bg-[url('@/assets/screen/zongtitaishi/office-area-bg.png')] bg-[length:100%_100%]"
                title="办公区总面积" :total="officeInfo.totalArea"></TotalArea>

            <UseAreaDetail :usedAreaPercent="officeInfo.usedAreaPercent"
                :unusedAreaPercent="officeInfo.unusedAreaPercent" />
        </div>

    </Common>

</template>
<script setup lang="ts">
import Common from '../common/index.vue'  // 公共组件
import { storeToRefs } from 'pinia'
import { useOfficeInfoStore } from '../../store'
import UseAreaDetail from '../subcomponents/useAreaDetail.vue'  // 使用区域详情组件
import TotalArea from '../subcomponents/totalArea.vue'

const { officeInfo } = storeToRefs(useOfficeInfoStore())

</script>
<style lang="scss" scoped></style>