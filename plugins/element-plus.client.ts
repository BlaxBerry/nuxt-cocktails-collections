import ElementPlus from "element-plus/dist/index.full";
import * as ElEconModules from "@element-plus/icons-vue";

export default defineNuxtPlugin((nuxtApp) => {
    
    nuxtApp.vueApp.use(ElementPlus);

    for (const iconName in ElEconModules) {
        const icon = ElEconModules[iconName];
        nuxtApp.vueApp.component('El-' + iconName, icon);
    }
});