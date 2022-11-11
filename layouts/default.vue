<script setup lang="ts">
const isLogin = ref(false)
const client = useSupabaseClient()

const logout = async () => {
  client.auth.signOut()
}

const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    isLogin.value = !!user.value
  })
})
</script>

<template>
  <header class="flex justify-between items-center py-2 px-4">
    <h1 class="font-semibold">Nuxt 3 + SupaBase Auth</h1>
    <button
      v-if="isLogin"
      class="px-4 py-2 bg-slate-500 text-white rounded"
      @click="logout"
    >
      <span> Log out </span>
    </button>
  </header>
  <slot />
</template>