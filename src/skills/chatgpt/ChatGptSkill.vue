<template>
  <section class="space-y-6 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
    <div class="space-y-4">
      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-slate-500">ChatGPT</p>
        <h2 class="text-2xl font-semibold text-slate-900">Ask the AI for code, fixes, or guidance.</h2>
      </div>
      <div class="grid gap-4 sm:grid-cols-[1fr_220px]">
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">Your request</label>
          <textarea
            v-model="userInput"
            rows="5"
            placeholder="Create a function that sorts an array"
            class="w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Language</label>
            <select
              v-model="inputLanguage"
              class="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            >
              <option v-for="option in languageOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>
          <Button
            :label="loading ? 'Loading...' : 'Generate'"
            :disabled="isSubmitDisabled"
            class="w-full rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            @click="onSubmit"
          />
        </div>
      </div>
    </div>

    <div class="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <div class="flex items-center justify-between">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Result</p>
        <button
          v-if="result || error"
          type="button"
          class="text-sm text-slate-500 transition hover:text-slate-700"
          @click="clearResult"
        >
          Clear
        </button>
      </div>
      <div class="min-h-[180px] rounded-3xl bg-white p-5 text-slate-700 shadow-sm">
        <template v-if="error">
          <p class="text-red-600">{{ error }}</p>
        </template>
        <template v-else-if="result">
          <pre class="whitespace-pre-wrap break-words font-mono text-sm leading-6">{{ result }}</pre>
        </template>
        <template v-else>
          <p class="text-slate-500">Your AI response will appear here after generation.</p>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSkillStore } from '@/stores/skills'
import { executeChatGptSkill } from './chatgpt.api'

const skillStore = useSkillStore()
const userInput = ref('')
const inputLanguage = ref('javascript')
const languageOptions = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Python', value: 'python' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'csharp' },
  { label: 'Go', value: 'go' },
  { label: 'Rust', value: 'rust' },
  { label: 'PHP', value: 'php' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'SQL', value: 'sql' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' }
]

const loading = computed(() => skillStore.loading)
const result = computed(() => skillStore.result)
const error = computed(() => skillStore.error)

const isSubmitDisabled = computed(
  () => skillStore.loading || userInput.value.trim().length === 0
)

async function onSubmit() {
  if (!userInput.value.trim()) {
    skillStore.setError('Please enter a request before generating.')
    return
  }

  skillStore.beginExecution()

  try {
    const response = await executeChatGptSkill(userInput.value.trim(), inputLanguage.value)
    skillStore.setResult(response)
  } catch (err) {
    skillStore.setError('Something went wrong while contacting the AI service. Please try again.')
  }
}

function clearResult() {
  skillStore.reset()
}
</script>
