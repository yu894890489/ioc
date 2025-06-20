<template>
    <Common name="officeInfo" class="w-full h-full">

        <div class="w-full h-full flex flex-col gap-14px ">
            <div class="w-414px h-39px bg-[url('@/assets/screen/green-info-title.png')] bg-[length:100%_100%]">

            </div>
            <totalArea title="绿化区总面积" :total="greenInfo.totalArea"></totalArea>

            <UseAreaDetail  :usedAreaPercent="greenInfo.usedAreaPercent"
                :unusedAreaPercent="greenInfo.unusedAreaPercent" />
        </div>

    </Common>

</template>
<script setup lang="ts">
import Common from '../common/index.vue'  // 公共组件
import { storeToRefs } from 'pinia'
import UseAreaDetail from '../subcomponents/useAreaDetail.vue'  // 使用区域详情组件
import totalArea from '../subcomponents/totalArea.vue'
import { useGreenInfoStore } from '../../store/substore/greenInfoStore'

const { greenInfo } = storeToRefs(useGreenInfoStore())


</script>
<style lang="scss" scoped></style>