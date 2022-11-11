<script setup lang="ts">
const client = useSupabaseClient()

const logout = async () => {
  client.auth.signOut()
}
</script>

<template>
  <header class="flex justify-between py-2 px-4">
    <h1 class="font-semibold">Nuxt 3 + SupaBase Auth</h1>
    <button
      class="px-4 py-2 bg-slate-400 text-white rounded"
      @click="logout"
    >
      <span> Log out </span>
    </button>
  </header>
  <slot />
</template>