<script setup lang="ts">
import VTypical from "vue-typical"
</script>

<template lang="pug">
.titleDiv
    //h1.firstTitle devOS: Sanity Edition
    v-typical.firstTitle(
        class="blink"
        :steps="['devOS', 1000, 'devOS: Insanity Edition', 500, 'devOS: Sanity Edition', 1000]"
        :loop="1"
        :wrapper="'h1'"
    )
    //h2.secondTitle A discord server filled with chaotic people and devs alike. Send help. Please.
    v-typical.secondTitle(
        class="blink"
        :steps="['A discord server filled with chaotic people and devs alike.', 1000, 'A discord server filled with chaotic people and devs alike. Send help.', 500, 'A discord server filled with chaotic people and devs alike. Send help. Please...', 1000]"
        :loop="1"
        :wrapper="'h2'"
    )
</template>

<style>
.titleDiv {
    padding: 20px;
    text-align: center;
    padding-top: calc(var(--scale) * 100px);
}

.firstTitle {
    font-size: calc(70px * var(--scale));
    margin-bottom: 0;
}

.secondTitle {
    font-size: calc(25px * var(--scale));
    margin-top: 10px;
}

.contentTitle {
    margin: 0;
    font-size: 35px;
}
.contentText {
    font-size: 20px;
}
</style>
