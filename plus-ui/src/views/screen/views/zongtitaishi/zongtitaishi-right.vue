<template lang="">
    <div class="flex flex-col gap-14px">
        <div class=" w-424px h-303px">
            <ParkOverallInfo></ParkOverallInfo>
        </div>
        <div class=" w-424px h-303px">
            <OfficeInfo></OfficeInfo>
        </div>
    </div>
</template>
<script setup lang="ts">
import ParkOverallInfo from '../../components/parkOverallInfo/index.vue'
import OfficeInfo from '../../components/officeInfo/index.vue'
</script>
<style lang="scss" scoped>

</style>