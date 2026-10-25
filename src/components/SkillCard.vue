<template>
  <button
    type="button"
    class="flex w-full items-start gap-4 rounded-3xl border p-5 text-left transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
    :class="selected ? 'border-sky-300 bg-sky-50/60 shadow-sm' : 'border-slate-200 bg-white'"
    @click="$emit('select')"
  >
    <div class="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-2xl">
      {{ skill.icon }}
    </div>
    <div class="grid gap-1">
      <h3 class="text-lg font-semibold text-slate-900">{{ skill.name }}</h3>
      <p class="text-sm text-slate-600">{{ skill.description }}</p>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Skill } from '@/skills/types'

const props = defineProps({
  skill: {
    type: Object as PropType<Skill>,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  }
})
</script>
