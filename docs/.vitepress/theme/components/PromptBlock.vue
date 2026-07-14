<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><section class="prompt-block"><div class="prompt-label">{{ title || '可复制提示词' }}</div><div><slot /></div></section></template>
