<template>
    <div class="w-full h-full flex flex-nowrap justify-between items-center ">
        <div class="h-full flex flex-col gap-14px pt-100px 
        bg-[linear-gradient(90deg,#001721_0%,rgba(0,32,43,0.8)_33%,rgba(0,51,64,0.41)_92%,rgba(0,71,86,0)_100%)]">
            <zongtitaishiLeft></zongtitaishiLeft>
        </div>

        <div class="h-full flex flex-col gap-14px pt-100px 
        bg-[linear-gradient(-90deg,#001721_0%,rgba(0,32,43,0.8)_33%,rgba(0,51,64,0.41)_92%,rgba(0,71,86,0)_100%)]">
            <zongtitaishiRight></zongtitaishiRight>
        </div>
    </div>
</template>
<script setup lang="ts">
import zongtitaishiLeft from './zongtitaishi-left.vue'
import zongtitaishiRight from './zongtitaishi-right.vue'

</script>
<style lang="scss" scoped></style>