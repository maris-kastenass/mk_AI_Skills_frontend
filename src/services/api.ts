const baseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000'

export interface SkillApiResponse {
  response?: string
  result?: string
  output?: string
  [key: string]: unknown
}

export async function postAgentRequest(body: { user_input: string; input_language: string }) {
  const response = await fetch(`${baseUrl}/api/agent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || 'Server returned an unsuccessful status code.')
  }

  try {
    return (await response.json()) as SkillApiResponse | string
  } catch {
    return await response.text()
  }
}

export function parseApiResponse(payload: SkillApiResponse | string): string {
  if (typeof payload === 'string') {
    return payload
  }

  if (typeof payload !== 'object' || payload === null) {
    return 'Unexpected API response format.'
  }

  const candidate = payload.response ?? payload.result ?? payload.output
  if (typeof candidate === 'string') {
    return candidate
  }

  return JSON.stringify(payload, null, 2)
}
