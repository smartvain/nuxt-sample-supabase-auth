<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo('/')
    }
  })
})
</script>

<template>
  <div>
    <p class="mt-8 mb-16">Hello</p>
  </div>
</template>
