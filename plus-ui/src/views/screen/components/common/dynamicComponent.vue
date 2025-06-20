<template >
    <div>
        <component :is="component"></component>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    component: {
        type: Object,
        default: () => ({})
    }
})
</script>
<style lang="scss" scoped>
    
</style>