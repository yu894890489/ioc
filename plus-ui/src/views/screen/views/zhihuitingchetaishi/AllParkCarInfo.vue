<template>
	<div
		class="grid grid-cols-5 w-full h-61px bg-[url('@/assets/screen/zhihuitingche/carInfoBoxBg.png')] bg-cover bg-no-repeat">
		<!-- 停车场总车位数 -->
		<div class="flex flex-col items-center justify-center text-center">
			<div class="text-11px text-[#CFEAFF] font-normal scale-90 whitespace-nowrap">停车场总车位数</div>
			<div class="flex items-center mt-1">
				<div class="text-gradient-blue text-20px font-bold leading-tight">
					{{ totalSpots }}
				</div>
				<div class="ml-1 mt-1 text-10px text-[#C1E9F9]">个</div>
			</div>
		</div>
		<!-- 当前停放车辆数 -->
		<div class="flex flex-col items-center justify-center text-center">
			<div class="text-11px text-[#CFEAFF] font-normal scale-90 whitespace-nowrap">当前停放车辆数</div>
			<div class="flex items-center mt-1">
				<div class="text-gradient-yellow text-20px font-bold leading-tight">
					{{ currentParked }}
				</div>
				<div class="ml-1 mt-1 text-10px text-[#C1E9F9]">个</div>
			</div>
		</div>
		<!-- 今日累计吞吐量 -->
		<div class="flex flex-col items-center justify-center text-center">
			<div class="text-11px text-[#CFEAFF] font-normal scale-90 whitespace-nowrap">今日累计吞吐量</div>
			<div class="flex items-center mt-1">
				<div class="text-gradient-green text-20px font-bold leading-tight">
					{{ throughput }}
				</div>
				<div class="text-11px mt-1 font-normal ml-1 text-gradient-green">
					%
				</div>
			</div>
		</div>
		<!-- 较昨日 -->
		<div class="flex flex-col items-center justify-center text-center">
			<div class="text-11px text-[#CFEAFF] font-normal scale-90 whitespace-nowrap">较昨日</div>
			<div class="flex items-center mt-1">
				<div class="text-[#FF7070] text-20px font-bold leading-tight">
					{{ vsYesterday }}
				</div>
				<div class="text-11px mt-1 font-normal ml-1 text-[#FF7070]">
					%
				</div>
				<div class="ml-1 text-lg text-[#FF7070]">
					<span v-if="vsYesterdayTrend === 'up'">↑</span>
					<span v-if="vsYesterdayTrend === 'down'">↓</span>
				</div>
			</div>
		</div>
		<!-- 较上周 -->
		<div class="flex flex-col items-center justify-center text-center">
			<div class="text-11px text-[#CFEAFF] font-normal scale-90 whitespace-nowrap">较上周</div>
			<div class="flex items-center mt-1">
				<div class="text-gradient-green text-20px font-bold leading-tight">
					{{ vsLastWeek }}
				</div>
				<div class="text-12px font-normal ml-1 text-gradient-green">
					%
				</div>
				<div class="ml-1 text-lg text-[#3ECA81]">
					<span v-if="vsLastWeekTrend === 'up'">↑</span>
					<span v-if="vsLastWeekTrend === 'down'">↓</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

const totalSpots = ref(1261)
const totalSpotsTrend = ref('up')

const currentParked = ref(190)
const currentParkedTrend = ref('up')

const throughput = ref(66)

const vsYesterday = ref(8)
const vsYesterdayTrend = ref('up')

const vsLastWeek = ref(8)
const vsLastWeekTrend = ref('down')
</script>
<style lang="scss" scoped>
.text-gradient-blue {
	background: linear-gradient(180deg, #98D5FF 0%, #3A8BFF 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
}

.text-gradient-yellow {
	background: linear-gradient(180deg, #F9E68E 0%, #E8A635 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
}

.text-gradient-green {
	background: linear-gradient(180deg, #AFFF99 0%, #3ECA81 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
}
</style>