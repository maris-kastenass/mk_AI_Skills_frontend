import type { Component } from 'vue'

export interface Skill {
  id: string
  name: string
  description: string
  icon: string
  component: Component
}
