<script setup>
import textCard from "../components/slices/textCard.vue";
import { usePrismicDocumentByUID, PrismicRichText, SliceZone } from "@prismicio/vue";
const { data: page } = usePrismicDocumentByUID("pages", "homepage");


</script>

<template>
  <main class="px-4"> 
    <div class="grid gap-4 grid-cols-3">
      <div class="card">content</div>
      <div class="card">content</div>
      <div class="card">content</div>
    </div>
    {{ page.data }}

    <hr class="mt-6"/>

    <PrismicRichText :field="page.data.page_content" />
    <SliceZone :slices="page.data.body" :components="{
      text_card: textCard
    }"/>

  </main>
</template>
