<script setup lang="ts">
import { onMounted, ref } from 'vue'
const props = defineProps<{ code: string; label: string }>()
const root = ref<HTMLElement>()
onMounted(async () => {
  const mermaid = (await import('mermaid')).default
  mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: document.documentElement.classList.contains('dark') ? 'dark' : 'neutral' })
  if (root.value) {
    const id = `mermaid-${Math.random().toString(36).slice(2)}`
    const { svg } = await mermaid.render(id, props.code)
    root.value.innerHTML = svg
  }
})
</script>
<template><figure class="mermaid-figure"><div ref="root" role="img" :aria-label="label" /><figcaption>{{ label }}</figcaption></figure></template>
