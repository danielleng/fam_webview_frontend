<script setup>
import { PrismicRichText } from "@prismicio/vue";
</script>

<template>
    <PrismicRichText :field="document.data.myRichTextField" wrapper="article" />
</template>