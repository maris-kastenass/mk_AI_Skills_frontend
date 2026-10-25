import { defineStore } from 'pinia'

export interface SkillExecutionState {
  loading: boolean
  result: string | null
  error: string | null
}

export const useSkillStore = defineStore('skill', {
  state: (): SkillExecutionState => ({
    loading: false,
    result: null,
    error: null
  }),
  actions: {
    beginExecution() {
      this.loading = true
      this.error = null
    },
    setResult(result: string) {
      this.result = result
      this.error = null
      this.loading = false
    },
    setError(error: string) {
      this.error = error
      this.loading = false
    },
    reset() {
      this.loading = false
      this.result = null
      this.error = null
    }
  }
})
