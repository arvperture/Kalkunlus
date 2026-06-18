/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#faf5ff',
                    100: '#f5ebff',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7e22ce',
                    900: '#581c87',
                },
                secondary: {
                    50: '#f0fdf4',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                },
                accent: {
                    50: '#f8fafc',
                    500: '#06b6d4',
                    600: '#0891b2',
                },
                dark: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    500: '#6b7280',
                    800: '#1f2937',
                    900: '#111827',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(135deg, #581c87 0%, #7e22ce 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #15803d 0%, #22c55e 100%)',
                'gradient-dark': 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                'gradient-accent': 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'fade-in-scale': 'fadeInScale 0.6s ease-out',
                'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeInScale: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
            transitionTimingFunction: {
                'ease-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [],
}
