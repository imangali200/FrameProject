<template>
  <div>
    <NuxtLink to="/moreinfo">TO back</NuxtLink>
    <h1>Lorem, ipsum.</h1>
    <p>Lorem ipsum dolor sit.</p>
  </div>
</template>

<script setup>
onMounted(() => {
  window.parent.postMessage(
    { url: "https://frame-project-mljf.vercel.app/task1" },
    "https://frame-project-sable.vercel.app/mainPage"
  );
});
</script>

<style scoped></style>
