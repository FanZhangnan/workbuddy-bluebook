<script setup lang="ts">
import { useId } from 'vue'
defineProps<{ label?: string; title: string }>()
const headingId = `outcome-${useId().replace(/:/g, '')}`
</script>
<template><section class="outcome-card" :aria-labelledby="headingId"><span>{{ label || '本章成果' }}</span><h2 :id="headingId">{{ title }}</h2><div><slot /></div></section></template>
