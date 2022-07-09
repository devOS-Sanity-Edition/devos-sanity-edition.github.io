<script>
import { RouterLink, RouterView } from "vue-router"
import TopNavbar from "@/components/TopNavbar.vue"
import * as THREE from "three"
import Vanta from "vanta/dist/vanta.fog.min"

export default {
    components: {
        TopNavbar
    },
    mounted() {
        const vL = Vanta({
            el: "body",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xfc6363,
            midtoneColor: 0x3cdec1,
            lowlightColor: 0xd200ff,
            baseColor: 0xffffff,
            THREE
            // parameters goes here
        })

        const vD = Vanta({
            el: "body",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xfc6363,
            midtoneColor: 0x3cdec1,
            lowlightColor: 0xd200ff,
            baseColor: 0x000000,
            THREE
            // parameters goes here
        })

        // Adjust Vanta for system theme
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            console.log("pcs: dark")
            this.vantaEffect = vD // Dark theme
        } else if (
            window.matchMedia &&
            !window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            console.log("pcs: light")
            this.vantaEffect = vL // Light theme
        }

        // Update if theme changes while website is loaded
        // window
        //     .matchMedia("(prefers-color-scheme: dark)")
        //     .addEventListener("change", (event) => {
        //         const newColorScheme = event.matches ? "dark" : "light"

        //         if (newColorScheme === "light") {
        //             console.log("ncs: light")
        //             this.vantaEffect = vL
        //         } else if (newColorScheme === "dark") {
        //             console.log("ncs: dark")
        //             this.vantaEffect = vD
        //         } else {
        //             throw new Error(
        //                 "Something has gone horribly wrong! Have a chocolate for your troubles"
        //             )
        //         }
        //     })
    }
}
</script>

<template lang="pug">
TopNavbar
RouterView
</template>

<style>
@import "@/assets/css/theme.css";

@font-face {
    font-family: "Renogare";
    src: url("@/assets/fonts/Renogare-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Poppins", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
}

@media only screen and (max-width: 668px) {
    :root {
        --scale: 0.7;
        --navBarMargin: 10px;
        --contentPadding: 12vw;
    }
}

@media only screen and (min-width: 668px) {
    :root {
        --scale: 1;
        --navBarMargin: 0px;
        --contentPadding: 6vw;
    }
}
</style>
