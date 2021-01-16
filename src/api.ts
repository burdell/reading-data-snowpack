import type { Book } from '~/types'

const baseApi = 'http://swapi.dev/api'

export async function getReadBooks() {
  const response = await fetch(`https://swapi.dev/api/books`)
  const results = (await response.json()) as Book[]

  return results
}
