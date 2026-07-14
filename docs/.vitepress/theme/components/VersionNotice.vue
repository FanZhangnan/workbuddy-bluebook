<script setup lang="ts">defineProps<{ verified?: string }>()</script>
<template><aside class="version-notice"><strong>版本提示</strong><p><slot />以当前官方版本为准。<span v-if="verified">最近复核：{{ verified }}。</span></p></aside></template>
