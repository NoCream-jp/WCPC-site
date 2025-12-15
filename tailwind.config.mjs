// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
    // 以下のパスが間違っていると反映されません
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'], 
            }
        },
    },
    plugins: [],
}
