import { postAgentRequest, parseApiResponse } from '@/services/api'

export async function executeChatGptSkill(userInput: string, inputLanguage: string) {
  const response = await postAgentRequest({ user_input: userInput, input_language: inputLanguage })
  return parseApiResponse(response)
}
