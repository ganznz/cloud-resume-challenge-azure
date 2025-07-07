import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-bg": "var(--color-light-bg)",
                "dark-bg": "var(--color-dark-bg)",
                "light-text": "var(--color-light-text)",
                "dark-text": "var(--color-dark-text)",
                "light-accent": "var(--color-light-accent)",
                "dark-accent": "var(--color-dark-accent)",
                "light-grey-secondary": "var(--light-grey-secondary)",
                "dark-grey-secondary": "var(--dark-grey-secondary)",
                "green-medium": "var(--green-medium)",
                "orange-medium": "var(--orange-medium)",
                "blue-light": "var(--blue-light)",
                "green-light": "var(--green-light)",
            },
        },
    },
} satisfies Config;
