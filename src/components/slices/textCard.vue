<script setup>
import { PrismicRichText } from '@prismicio/vue';
import { objectToString } from '@vue/shared';

const props = defineProps({
    slice: Object
});
</script>

<template>
    <div class="card">
        <h1 class="text-xl"><PrismicRichText :field="slice.primary.card_heading" /></h1>
        <PrismicRichText :field="slice.primary.card_content"/>
    </div>
</template>

<style> 
.card {
    @apply border-solid;
    @apply border-2;
    @apply border-gray-100;
    @apply p-6;
    @apply rounded-md;
}
</style>