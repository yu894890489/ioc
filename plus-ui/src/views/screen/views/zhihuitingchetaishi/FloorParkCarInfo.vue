<template>
	<div class="w-full h-44px flex items-center gap-10px mt-10px">
		<div text="white 12px center" v-if="location === 'left'"
			class="w-48px h-34px flex items-center justify-center font-bold bg-gradient-to-r from-[#68C6FD] to-[#318EFC00] cursor-pointer">
			一层
		</div>
		<div class="flex-1 grid grid-cols-4 gap-5px h-full bg-gradient-to-b from-[#81C2F0] to-[#1D2E3500]">
			<!-- 停车场总车位 -->
			<div class="flex flex-col items-center justify-center text-center">
				<div class="text-11px mb-1 text-[#C1E9F9] font-normal scale-90 whitespace-nowrap">停车场总车位</div>
				<div class="flex items-center">
					<div class="text-white text-16px font-bold">
						{{ floorData.totalSpots }}
					</div>
					<div class="ml-1 text-10px text-[#C1E9F9]">个
					</div>
				</div>
			</div>
			<!-- 停车场空闲车位 -->
			<div class="flex flex-col items-center justify-center text-center">
				<div class="text-11px mb-1 text-[#C1E9F9] font-normal scale-90 whitespace-nowrap">停车场空闲车位</div>
				<div class="flex items-center">
					<div class="text-white text-16px font-bold">
						{{ floorData.freeSpots }}
					</div>
					<div class="ml-1 text-10px text-[#C1E9F9]">个
					</div>
				</div>
			</div>
			<!-- 空闲车位占比 -->
			<div class="flex flex-col items-center justify-center text-center">
				<div class="text-11px mb-1 text-[#C1E9F9] font-normal scale-90 whitespace-nowrap">空闲车位占比</div>
				<div class="flex items-center">
					<div class="text-white text-16px font-bold">
						{{ floorData.freeRate }}
					</div>
					<div class="ml-1 mt-1 text-10px text-[#C1E9F9]">
						%
					</div>
				</div>
			</div>
			<!-- 较昨日 -->
			<div class="flex flex-col items-center justify-center text-center">
				<div class="text-11px mb-1 text-[#C1E9F9] font-normal scale-90 whitespace-nowrap">较昨日</div>
				<div class="flex items-center">
					<div class="text-white text-16px font-bold">
						{{ floorData.vsYesterday }}
					</div>
					<div class="ml-1 mt-1 text-10px text-[#C1E9F9]">
						%
					</div>
					<div class="ml-1 text-xs text-[#FF7070]">
						<span v-if="floorData.vsYesterdayTrend === 'up'">↑</span>
						<span v-if="floorData.vsYesterdayTrend === 'down'">↓</span>
					</div>
				</div>
			</div>
		</div>
		<div text="white 12px center" v-if="location === 'right'"
			class="w-48px h-34px flex items-center justify-center font-bold bg-gradient-to-l from-[#68C6FD] to-[#318EFC00] cursor-pointer">
			二层
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
    location: {
        type: String,
        default: () => "left"
    }
})
const floorData = ref({
	totalSpots: 150,
	totalSpotsTrend: 'up',
	freeSpots: 10,
	freeSpotsTrend: 'up',
	freeRate: 6,
	vsYesterday: 8,
	vsYesterdayTrend: 'up'
})
</script>
