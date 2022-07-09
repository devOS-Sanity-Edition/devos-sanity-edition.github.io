<script setup lang="ts"></script>

<template lang="pug">
router-link(to="/")
    button.currentButton.navButton Home
a(target="_blank" href="https://github.com/devOS-Sanity-Edition")
    button.currentButton.navButton GitHub
a(target="_blank" href="https://mvn.devos.one")
    button.currentButton.navButton Maven Server
a(target="_blank" href="https://modrinth.com/user/devOS-Nautical")
    button.currentButton.navButton Modrinth
</template>

<style>
.navButton {
    padding: 5px;
    height: calc(50px * var(--scale));
    border-radius: 7px;
    margin: 5px;
    font-size: calc(15px * var(--scale));
    white-space: nowrap;
    text-align: center;
    outline: none;
    cursor: pointer;
}
</style>
