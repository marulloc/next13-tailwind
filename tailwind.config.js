/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            keyframes: {
                'wiggle-right': {
                    '0%, 100%': { transform: 'translateX(10px)' },
                    '50%': { transform: 'translateX(0px)' },
                },
                'wiggle-left': {
                    '0%, 100%': { transform: 'translateX(-10px)' },
                    '50%': { transform: 'translateX(0px)' },
                },
            },

            animation: {
                'wiggle-right': 'wiggle-right 1.5s ease-in-out infinite', //keyframe
                'wiggle-left': 'wiggle-left 1.5s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
