<template lang="">
    <div v-if="isShow">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCommonStore } from '../../store'

const props = defineProps({
    name: {
        type: String,
        default: () => ({})
    }
})

const { permission } = storeToRefs(useCommonStore())

const isShow = computed(() => {
    return permission.value[props.name]
})

</script>
<style lang="scss" scoped>
    
</style>