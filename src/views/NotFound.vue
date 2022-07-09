<script setup lang="ts">
import MainTitle from "@/components/MainTitle.vue"
import ContentText from "@/components/ContentText.vue"

const fourOhhFourQuotes = [
    {
        quote: "what the fuck did you do",
        author: "quinn"
    },
    {
        quote: "what the fuck did you do",
        author: "carter"
    },
    {
        quote: "nubert supremacy",
        author: "bryce"
    },
    {
        quote: "uhhhhhhhhhhhhhhhh that's not supposed to happen",
        author: "storm and devin"
    },
    {
        quote: "fuck shit fuck fuck fuck bitch twat AAAAAAAAAAAAA",
        author: "devin"
    },
    {
        quote: "meep.",
        author: "devin"
    }
]
const randomNumber = Math.floor(Math.random() * fourOhhFourQuotes.length)
const randQuote = fourOhhFourQuotes[randomNumber]
</script>

<template lang="pug">
main
    MainTitle
    ContentText(
        isLeft = true
        title = "404"

    ) "{{ randQuote.quote }}" - {{ randQuote.author }}
</template>
