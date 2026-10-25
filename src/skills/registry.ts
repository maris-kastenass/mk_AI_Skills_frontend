import ChatGptSkill from './chatgpt/ChatGptSkill.vue'
import type { Skill } from './types'

export const skills: Skill[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Generate code and answers with the ChatGPT assistant.',
    icon: '🤖',
    component: ChatGptSkill
  }
]
