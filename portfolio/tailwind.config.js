/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#19e65e",
                "background-light": "#f6f8f6",
                "background-dark": "#0a0a0a",
                "surface-dark": "#121212",
                "surface-highlight": "#1a1a1a",
                "primary-dark": "#0ea342",
                "background-main": "#FBFBFB",
                "text-main": "#111111",
                "text-body": "#444444",
                "text-muted": "#666666",
                "surface-light": "#ffffff",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "sans": ["Inter", "sans-serif"],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
                'grid-pattern-dark': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}
