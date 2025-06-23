<template>
    <div class="flex flex-col gap-14px">
        <Common name="zhihuitingchetaishi-left-" class="w-414px">
            <img src="@/assets/screen/zhihuitingche/carStatisticTitle.png" alt="智慧停车台时" class="w-full h-39px">
            <AllParkCarInfo />
            <FloorParkCarInfo location="left" />
            <div class="mt-10px w-full h-63px bg-gradient-to-r from-[#81C2F0] to-[#1D2E3500] flex flex-col items-end justify-center">
                <span class="w-78px text-center text-22px text-[#0AF5B4] font-bold whitespace-nowrap mr-62px">
                    52%
                </span>
                <span class="text-13px text-[#C1E9F9] font-normal whitespace-nowrap mr-62px">
                    停车场饱和度
                </span>
            </div>
            
            <FloorParkCarInfo location="right" />
        </Common>
        <Common name="zhihuitingchetaishi-right" class="w-414px">
            <img src="@/assets/screen/zhihuitingche/carParkTimeTitle.png" alt="智慧停车台时" class="w-full h-39px mt-10px">
        </Common>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Common from '../../components/common/index.vue'
import AllParkCarInfo from './AllParkCarInfo.vue'
import FloorParkCarInfo from './FloorParkCarInfo.vue'

</script>
<style lang="scss" scoped></style>