<script setup lang="ts"></script>

<template lang="pug">
- var ztereosGithub = "<a href=\"https://github.com/ZtereoHYPE\" target=\"_blank\">ZtereoHYPE</a>"
- var stormsTwitter = "<a href=\"https://twitter.com/CephalonCosmic\" target=\"_blank\">Storm</a>"
.footer
    h3.footerTitle please send help the nooks took my family hostage
    p.footerText
        span MIT Licensed. Copyright 2021-2022 devOS: Sanity Edition
    p.footerText Thank you !{ztereosGithub} for the original site, and !{stormsTwitter} for helping me with Vue! c:
</template>

<style scoped>
.footer {
    margin-top: 20px;
    font-size: calc(23px * var(--scale));
    text-align: center;
    margin-bottom: 20px;
}
.footerText {
    padding: 2px;
    font-size: calc(12px * var(--scale));
    margin: 0;
}
</style>
