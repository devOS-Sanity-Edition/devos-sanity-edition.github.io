import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                title: "devOS: Sanity Edition - Home",
                metaTags: [
                    // {
                    //     name: "viewport",
                    //     content: "width=device-width, initial-scale=1"
                    // },
                    {
                        property: "og:title",
                        content: "devOS: Sanity Edition"
                    },
                    {
                        property: "og:type",
                        content: "website"
                    },
                    {
                        property: "og:url",
                        content: "https://devos.one"
                    },
                    {
                        property: "og:image",
                        content:
                            "https://raw.githubusercontent.com/devOS-Sanity-Edition/devos-sanity-edition.github.io/main/images/thumbnail.png"
                    },
                    {
                        property: "og:description",
                        content: "the weird devOS website"
                    },

                    // twitter

                    {
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        name: "twitter:url",
                        content: "https://devos.one"
                    },
                    {
                        name: "twitter:title",
                        content: "devOS: Sanity Edition"
                    },
                    {
                        name: "twitter:description",
                        content: "the weird devOS website"
                    },
                    {
                        name: "twitter:image",
                        content:
                            "https://raw.githubusercontent.com/devOS-Sanity-Edition/devos-sanity-edition.github.io/main/images/thumbnail.png"
                    },
                    {
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        name: "theme-color",
                        content: "#00a86b"
                    }
                ]
            }
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/NotFound.vue")
        }
    ]
})

export default router
