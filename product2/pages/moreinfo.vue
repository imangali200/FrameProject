<template>
  <div>
    <button @click="toMain">ToBack</button>
    <h1>hello</h1>
    <p>
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Distinctio, nemo.
    </p>
    <p>{{ $route.fullPath }}</p>
    <NuxtLink to="/task1">task1</NuxtLink>
  </div>
</template>

<script setup>
const router = useRouter();
onMounted(() => {
  window.parent.postMessage(
    { url: "http://localhost:3002/moreinfo" },
    "http://localhost:3000"
  );
});
function toMain() {
  router.push({
    path: "/",
  });
  window.parent.postMessage(
    { url: "http://localhost:3002" },
    "http://localhost:3000"
  );
}
</script>

<style scoped></style>
