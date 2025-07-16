<template>
  <div class="tw-flex tw-flex-col tw-items-center">
    <div class="tw-flex tw-bg-slate-200 tw-w-[800px]">
      <div class="tw-flex tw-flex-col tw-gap-3 tw-justify-center tw-px-2">
        <h1 class="tw-text-[24px] tw-font-semibold">products</h1>
        <div class="tw-flex tw-flex-col tw-gap-3">
          <p
            @click="iframeValue = 'http://localhost:3001/products/Product1'"
            class="tw-text-[18px]"
          >
            Product1
          </p>
          <p
            @click="iframeValue = 'http://localhost:3002'"
            class="tw-text-[18px]"
          >
            Product2
          </p>
        </div>
      </div>
      <div>
        <iframe
          id="inlineFrameExample"
          title="product1"
          width="375"
          height="700"
          :src="iframeValue"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const iframeValue = ref("http://localhost:3002");
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const urlFromQuery = route.query.url;
  if (urlFromQuery) {
    iframeValue.value = urlFromQuery;
  }

  window.addEventListener("message", (event) => {
    if (event.data.url) {
      router.push({ query: { url: event.data.url } });
      iframeValue.value = event.data.url;
      console.log(event.data.url)
    }
    
  });
});
</script>


<style scoped></style>
