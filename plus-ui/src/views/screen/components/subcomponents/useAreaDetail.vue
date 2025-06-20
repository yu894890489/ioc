<template>
  <div class="w-full h-64px flex flex-nowrap justify-evenly">
    <div class="w-192px h-64px bg-[url('@/assets/screen/common-used-area-bg.png')] bg-[length:100%_100%] relative">
      <div class="absolute right-11px top-11px flex flex-col h-42px w-70px">
        <span class="w-full text-[#00E5FFFF] text-14px font-thin"> 已使用区域 </span>
        <div class="w-full h-full flex flex-nowrap items-baseline">
          <span class="text-[#fff] text-18px font-light">
            {{ props.usedAreaPercent }}
          </span>
          <span class="text-[#425c66] text-11px leading-[21px] tracking-[2px] text-left not-italic ml-2px"> % </span>
        </div>
      </div>
    </div>
    <div class="w-192px h-64px bg-[url('@/assets/screen/common-unused-area-bg.png')] bg-[length:100%_100%] relative">
      <div class="absolute right-11px top-11px flex flex-col h-42px w-70px">
        <span class="w-full text-[#01d8b4] text-14px font-thin"> 空闲区域 </span>
        <div class="w-full h-full flex flex-nowrap items-baseline">
          <span class="text-[#fff] text-18px font-light">
            {{ props.unusedAreaPercent }}
          </span>
          <span class="text-[#425c66] text-11px leading-[21px] tracking-[2px] text-left not-italic ml-2px"> % </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
    usedAreaPercent: {
        type: String,
        default: '0'
    },
    unusedAreaPercent: {
        type: String,
        default: '0'
    }
});
</script>
<style lang="scss" scoped></style>
