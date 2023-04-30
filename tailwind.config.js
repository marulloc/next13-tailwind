/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            textColor: {
                marulloc: {
                    base: 'var(--color-text-base)',
                    muted: 'var(--color-text-muted)',
                    inverted: 'var(--color-text-inverted)',
                },
            },
            backgroundColor: {
                marulloc: {
                    fill: 'var(--color-fill)',
                    'button-accent': 'var(--color-button-accent)',
                    'button-accent-hover': 'var(--color-button-accent-hover)',
                    // [1] 'button-accent-muted': 'var(--color-button-muted)', 이러면 --tw-bg-opacity가 동작하지 않음
                    // [2] 'button-accent-muted': `rgba(var(--color-button-muted), opacity)`,
                    // [2-1] tailwind가 내부적으로 사용하는 opacity value와 composing 해야한다.
                    // [2-2] 내부적으로 사용하는 value에 접근하기 위해서 함수로 작성한다.
                    'button-accent-muted': ({ opacityValue }) => {
                        // `rgba(var(--color-button-muted), ${opacityValue})`
                        // rgba를 사용하기 위해서 css 변수도 헥사코드가 아닌 rgb로 값을 가지고 있어야한다.
                        if (opacityValue !== undefined)
                            return `rgba(var(--color-button-muted), ${opacityValue})`;
                        else return `rgb(var(--color-button-muted))`;
                    },
                },
            },

            gradientColorStops: {
                marulloc: {
                    hue: 'var(--color-fill)',
                },
            },

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
