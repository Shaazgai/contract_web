/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontSize: {
            xs: ['10px', '12px'],
            sm: ['12px', '16px'],
            md: ['14px', '18px'],
            lg: ['16px', '24px'],
            xl: ['20px', '24px'],
            '2xl': ['24px', '24px'],
            '3xl': ['34px', '32px'],
            '4xl': ['38px', '32px'],
            '5xl': ['40px', '44px'],
            '6xl': ['64px', '64px'],
            '9xl': ['96px', '149px'],
            logoSize: ['32px', '44px'],
            logoMobile: ['20px', '28px'],
            cartDesktop: ['28px', '40px'],
        },
        screens: {
            xs: '576px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1408px',
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                xs: '576px',
                sm: '768px',
                md: '992px',
                lg: '1200px',
                xl: '1408px',
            },
        },
        extend: {
            colors: {
                'rgba-gray-300': 'rgba(254, 125, 194, 0.3)',
                'rgba-green-600': 'rgba(104, 114, 50, 0.8)',
                'rgba-pink-100': 'rgba(253, 207, 199, 0.15)',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                // primary: {
                //   DEFAULT: 'hsl(var(--primary))',
                //   foreground: 'hsl(var(--primary-foreground))',
                // },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                },
                primary: '#f2f2f2',
                // 'primary-100': '#EAFAFC',
                // primaryDark: '#2f4a53',
                primarySecond: '#d9ff0f',
                brand5: '#808080',

                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            backgroundImage: {
                firstBG: "url(' / images / first / first.png ')",
            },
        },
    },
    plugins: [],
};