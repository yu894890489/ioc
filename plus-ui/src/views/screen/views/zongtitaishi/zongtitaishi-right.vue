<template>
    <div class="flex flex-col gap-14px">
        <div class=" w-424px ">
            <ParkOverallInfo></ParkOverallInfo>
        </div>
        <div class=" w-424px ">
            <OfficeInfo></OfficeInfo>
        </div>
        <div class=" w-424px">
            <BussinessInfo></BussinessInfo>
        </div>
        <div class=" w-424px">
            <GreenInfo></GreenInfo>
        </div>
    </div>
</template>
<script setup lang="ts">
import ParkOverallInfo from '../../components/parkOverallInfo/index.vue'
import OfficeInfo from '../../components/officeInfo/index.vue'
import BussinessInfo from '../../components/bussinessInfo/index.vue'
import GreenInfo from '../../components/greenInfo/index.vue'
</script>
<style lang="scss" scoped></style>