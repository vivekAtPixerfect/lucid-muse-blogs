
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'cursive': ['Dancing Script', 'cursive'],
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'shimmer': 'shimmer 2s ease-in-out infinite'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'hsl(var(--foreground))',
						'[class~="lead"]': {
							color: 'hsl(var(--muted-foreground))',
						},
						a: {
							color: 'hsl(var(--primary))',
							textDecoration: 'underline',
							fontWeight: '500',
						},
						strong: {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
						},
						'ol[type="A"]': {
							'--list-counter-style': 'upper-alpha',
						},
						'ol[type="a"]': {
							'--list-counter-style': 'lower-alpha',
						},
						'ol[type="A" s]': {
							'--list-counter-style': 'upper-alpha',
						},
						'ol[type="a" s]': {
							'--list-counter-style': 'lower-alpha',
						},
						'ol[type="I"]': {
							'--list-counter-style': 'upper-roman',
						},
						'ol[type="i"]': {
							'--list-counter-style': 'lower-roman',
						},
						'ol[type="I" s]': {
							'--list-counter-style': 'upper-roman',
						},
						'ol[type="i" s]': {
							'--list-counter-style': 'lower-roman',
						},
						'ol[type="1"]': {
							'--list-counter-style': 'decimal',
						},
						'ol > li': {
							position: 'relative',
						},
						'ol > li::marker': {
							fontWeight: '400',
							color: 'hsl(var(--muted-foreground))',
						},
						'ul > li': {
							position: 'relative',
						},
						'ul > li::marker': {
							color: 'hsl(var(--muted-foreground))',
						},
						hr: {
							borderColor: 'hsl(var(--border))',
							borderTopWidth: 1,
						},
						blockquote: {
							fontWeight: '500',
							fontStyle: 'italic',
							color: 'hsl(var(--foreground))',
							borderLeftWidth: '0.25rem',
							borderLeftColor: 'hsl(var(--border))',
							quotes: '"\\201C""\\201D""\\2018""\\2019"',
						},
						h1: {
							color: 'hsl(var(--foreground))',
							fontWeight: '700',
						},
						h2: {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
						},
						h3: {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
						},
						h4: {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
						},
						'figure figcaption': {
							color: 'hsl(var(--muted-foreground))',
						},
						code: {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
						},
						'a code': {
							color: 'hsl(var(--primary))',
						},
						pre: {
							color: 'hsl(var(--foreground))',
							backgroundColor: 'hsl(var(--muted))',
							borderRadius: 'calc(var(--radius) - 2px)',
						},
						'pre code': {
							backgroundColor: 'transparent',
							borderWidth: '0',
							borderRadius: '0',
							padding: '0',
							fontWeight: '400',
							color: 'inherit',
							fontSize: 'inherit',
							fontFamily: 'inherit',
							lineHeight: 'inherit',
						},
						table: {
							width: '100%',
							tableLayout: 'auto',
							textAlign: 'left',
							marginTop: '2em',
							marginBottom: '2em',
							fontSize: '0.875em',
							lineHeight: '1.7142857',
						},
						thead: {
							borderBottomWidth: '1px',
							borderBottomColor: 'hsl(var(--border))',
						},
						'thead th': {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
							verticalAlign: 'bottom',
						},
						'tbody tr': {
							borderBottomWidth: '1px',
							borderBottomColor: 'hsl(var(--border))',
						},
						'tbody tr:last-child': {
							borderBottomWidth: '0',
						},
						'tbody td': {
							verticalAlign: 'baseline',
						},
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
