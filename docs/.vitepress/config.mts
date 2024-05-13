import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "dousoukai",
    description: "A VitePress Site",
    base:"/dousoukai/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
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
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
});
