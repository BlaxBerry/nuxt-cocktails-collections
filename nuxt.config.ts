// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Cocktails Collections ",
        },
    },
    ssr: false,
    css: ["~/assets/styles/index.scss"],
    modules: ['@nuxtjs/color-mode'],
    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: 'theme-', // theme mode classname prefix
        classSuffix: '', // theme mode classname suffix
        storageKey: 'nuxt-color-mode'
    }
});
