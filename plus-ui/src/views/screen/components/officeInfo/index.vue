<template>
    <Common name="officeInfo" class="w-full h-full">

        <div class="w-full h-full flex flex-col ">
            <div class="w-414px h-39px bg-[url('@/assets/screen/office-area-title.png')] bg-[length:100%_100%]">

            </div>
            <div class="w-400px h-58px bg-[url('@/assets/screen/office-area-bg.png')] bg-[length:100%_100%] pl-72px" >
                <div class="flex items-center w-full h-full">
                    <span class="font-400px text-[#fff] text-14px">
                        办公区域总面积:
                    </span>
                    <span class="text-[#fff] text-24px font-bold ml-83px">
                        {{ officeInfo.officeArea }}
                    </span>
                    <span class="text-[#fff] text-14px font-400px ml-12px">
                        m²
                    </span>
                </div>
            </div>
        </div>

    </Common>

</template>
<script setup lang="ts">
import Common from '../common/index.vue'
import { storeToRefs } from 'pinia'
import { useOfficeInfoStore } from '../../store'

const { officeInfo } = storeToRefs(useOfficeInfoStore())

</script>
<style lang="scss" scoped></style>