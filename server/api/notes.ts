import { serverSupabaseUser } from "#supabase/server";

const data = [
  { id: 0, email: 'zlc.blue15210@gmail.com', content: 'lorem 0' },
  { id: 1, email: 'zlc.blue15210@gmail.com', content: 'lorem 1' },
  { id: 2, email: 'zlc.blue15210@gmail.com', content: 'lorem 2' },
  { id: 3, email: 'zlc.blue15210@icloud.com', content: 'lorem 3' },
  { id: 4, email: 'zlc.blue15210@icloud.com', content: 'lorem 4' },
]

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  return data.filter((note) => note.email === user.email)
})