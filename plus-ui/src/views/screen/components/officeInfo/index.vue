<template>
    <Common name="officeInfo" class="w-full h-full">

        <div class="w-full h-full">
            <div class="w-414px h-39px bg-[url('@/assets/screen/office-area-title.png')] bg-[length:100%_100%]">

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