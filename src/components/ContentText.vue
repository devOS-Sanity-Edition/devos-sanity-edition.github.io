<script setup lang="ts">
defineProps<{ isLeft: boolean; title: string }>()
</script>

<template lang="pug">
div(:class="isLeft ? 'firstContentDiv' : 'secondContentDiv'")
    h2.contentTitle {{title}}
    p.contentText
        slot
</template>

<style scoped>
.firstContentDiv {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: var(--contentPadding);
    padding-bottom: var(--contentPadding);
}

.secondContentDiv {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: var(--contentPadding);
    padding-bottom: var(--contentPadding);
}

@media only screen and (max-width: 668px) {
    .firstContentDiv {
        clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);
    }
    .secondContentDiv {
        clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 90%);
    }
}

@media only screen and (min-width: 668px) {
    .firstContentDiv {
        clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
    }
    .secondContentDiv {
        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);
    }
}
</style>
