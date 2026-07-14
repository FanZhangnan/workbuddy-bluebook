<script setup lang="ts">defineProps<{ href: string; title: string; format?: string }>()</script>
<template><aside class="download-panel"><div><strong>{{ title }}</strong><small>{{ format || '可编辑文件' }} · CC BY 4.0</small></div><a :href="href" download>下载模板</a></aside></template>
