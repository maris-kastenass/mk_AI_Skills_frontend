<template>
  <section class="grid gap-6 xl:grid-cols-[320px_1fr]">
    <div class="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Skills</p>
        <p class="mt-2 text-slate-700">Choose a skill for your developer workflow. The first skill is ChatGPT with code-focused prompt support.</p>
      </div>
      <div class="space-y-4">
        <SkillCard
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
          :selected="selectedSkill?.id === skill.id"
          @select="onSelectSkill(skill)
          "
        />
      </div>
    </div>

    <div class="space-y-6">
      <div class="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-slate-500">Skill</p>
            <h2 class="text-2xl font-semibold text-slate-900">{{ selectedSkill?.name }}</h2>
            <p class="mt-2 text-slate-600">{{ selectedSkill?.description }}</p>
          </div>
        </div>
      </div>

      <component :is="selectedSkill?.component || PlaceholderPanel" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { skills } from '@/skills/registry'
import type { Skill } from '@/skills/types'
import SkillCard from '@/components/SkillCard.vue'
import PlaceholderPanel from '@/components/PlaceholderPanel.vue'

const selectedSkill = ref<Skill | null>(skills[0] ?? null)

function onSelectSkill(skill: Skill) {
  selectedSkill.value = skill
}
</script>
