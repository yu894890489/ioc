<template>
    <div class="w-400px h-58px pl-72px">
        <div class="flex items-center w-full h-full">
            <span class="font-400px text-[#d8e3e5] text-14px">
                {{ props.title }}
            </span>
            <span class="text-[#fff] text-24px font-bold ml-83px">
                {{ props.total }}
            </span>
            <span class="text-[#fff] text-14px font-400px ml-12px">
                m²
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: "总面积:",
    },
    total: {
        type: String,
        default: '0'
    },
});

</script>
<style lang="scss" scoped></style>