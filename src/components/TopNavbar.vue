<script setup lang="ts">
import NavbarLinks from "@/components/NavbarLinks.vue"
</script>

<template lang="pug">
.navBar
    .logoDiv
        img.logoImage(src="@/assets/logo.png"
            alt="devOS Logo")
        .logoText
            p.logoTextTop devOS
            p.logoTextBottom Sanity Edition
    NavbarLinks
</template>

<style>
.navBar {
    width: calc(100% - 2 * var(--navBarMargin));
    display: flex;
    margin: var(--navBarMargin);
    align-items: center;
    position: fixed;
    z-index: 99;
}

.logoDiv {
    display: flex;
    align-items: center;
    margin: 5px;
    margin-left: 10px;
}

.logoImage {
    height: calc(40px * var(--scale));
    width: auto;
    border-radius: 100%;
    margin-right: 5px;
}

.logoText {
    display: flex;
    flex-direction: column;
    font-size: calc(15px * var(--scale));
}

.logoTextTop {
    margin: 0;
}

.logoTextBottom {
    margin: 0;
}

@media only screen and (max-width: 668px) {
    .navBar {
        overflow-x: auto;
        border-radius: 12px;
    }
}
</style>
