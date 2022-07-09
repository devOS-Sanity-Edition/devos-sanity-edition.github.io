<script setup lang="ts">
import MainTitle from "@/components/MainTitle.vue"
import ContentText from "@/components/ContentText.vue"
import BottomFooter from "@/components/BottomFooter.vue"
</script>

<template lang="pug">
- var cursedHereLink = "<a href=\"https://modrinth.com/user/devOS-Nautical\" target=\"_blank\">here</a>"
- var githubLink = "<a href=\"https://github.com/devOS-Sanity-Edition\" target=\"_blank\">here</a>"

main
    MainTitle
    ContentText(
        isLeft = true
        title = "What is devOS?"
    ) devOS is a private Discord community filled from chaotic beans to talented individuals who create software together. We tend to open source everything we do, but in the rare occasion, make a joke repo or two for the hell of it.
    ContentText(
        isLeft = false
        title = "We're on Modrinth!"
    ) We make Minecraft mods, and guess what? You can download them! We develop most of our mods under the Team Nautical name. Feel free to grab em !{cursedHereLink}!
    ContentText(
        isLeft = true
        title = "What do you all make, and can I join the community?"
    ) Currently we're waiting on Godot 4.0 to work on our game engine, Tanuki Engine. We are also working on multiple Minecraft mods, which work on Fabric and Quilt modloaders. You can see everything else we make !{githubLink}. As for joining the community, it is invite only, sorry.
    BottomFooter
</template>

<style></style>
