<template>
  <div class="min-h-full min-h-screen px-6">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
