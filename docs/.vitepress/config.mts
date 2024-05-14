import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "dousoukai",
    description: "A VitePress Site",
    base: "/dousoukai/",
    head: [["link", { rel: "icon", type: "image/svg+xml", href: "/dousoukai/icon.svg" }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: "/icon.svg", width: 24, height: 24 },
        nav: [
            { text: "同窓会", link: "/dousoukai" },
            { text: "リンク集", link: "/links" },
        ],

        sidebar: [
            {
                text: "同窓会",
                link: "/dousoukai",
            },
            {
                text: "リンク集",
                link: "/links",
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/petaxa/dousoukai" },
        ],
    },
});
