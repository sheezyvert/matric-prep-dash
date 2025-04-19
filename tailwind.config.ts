
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Progress status colors
				progress: {
					'not-started': '#E5E7EB',
					'in-progress': '#60A5FA',
					'completed': '#34D399',
				},
				difficulty: {
					1: '#93C5FD',
					2: '#3B82F6',
					3: '#1E40AF',
				},
				// South African inspired color palette
				sa: {
					'sunset': '#E07A5F',
					'sky': '#3D5A80',
					'gold': '#E4CDA7',
					'emerald': '#2A9D8F',
					'charcoal': '#264653',
				},
				education: {
					primary: '#3B82F6', // Brand primary color - blue
					secondary: '#6366F1', // Secondary color - indigo
					accent: '#8B5CF6', // Accent color - purple
					success: '#34D399', // Success/completed - green
					warning: '#FBBF24', // Warning/in progress - amber
					error: '#F87171', // Error - red
					info: '#60A5FA', // Info - blue
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-left': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'draw': {
					'0%': { 'stroke-dashoffset': '100%' },
					'100%': { 'stroke-dashoffset': '0' }
				},
				'morph-gradient': {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' }
				},
				'carousel-left': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
				'slide-right': 'slide-right 0.6s ease-out',
				'slide-left': 'slide-left 0.6s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'draw': 'draw 2s forwards ease-in-out',
				'morph-gradient': 'morph-gradient 15s ease infinite',
				'carousel': 'carousel-left 30s linear infinite'
			},
			fontSize: {
				'xs': '0.75rem',
				'sm': '0.875rem',
				'base': '1rem',
				'lg': '1.125rem',
				'xl': '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
			},
			backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(to right bottom, var(--tw-gradient-stops))',
                'features-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
                'teacher-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
            },
			spacing: {
				'4': '4px',
				'8': '8px',
				'16': '16px',
				'24': '24px',
				'32': '32px',
				'48': '48px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
