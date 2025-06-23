<template>
    <div class="w-full h-full flex flex-nowrap justify-between items-center ">
        <div class="h-full flex flex-col gap-14px bg-left">
            <zongtitaishiLeft></zongtitaishiLeft>
        </div>

        <div class="h-full flex flex-col gap-14px bg-right">
            <zongtitaishiRight></zongtitaishiRight>
        </div>
    </div>
</template>
<script setup lang="ts">
import zongtitaishiLeft from './zongtitaishi-left.vue'
import zongtitaishiRight from './zongtitaishi-right.vue'

</script>
<style lang="scss" scoped>
.bg-left {
    background: linear-gradient(90deg,
            #001721 0%, rgba(0, 32, 43, 0.8) 33%,
            rgba(0, 51, 64, 0.41) 92%,
            rgba(0, 71, 86, 0) 100%);
}

.bg-right {
    background: linear-gradient(-90deg,
            #001721 0%,
            rgba(0, 32, 43, 0.8) 33%,
            rgba(0, 51, 64, 0.41) 92%,
            rgba(0, 71, 86, 0) 100%);
}
</style>