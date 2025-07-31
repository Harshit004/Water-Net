
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
				// Original Logo Color Family - Natural Greens Only
				'medium-spring': '#D8E588', /* Light yellow-green from logo */
				'pea-green': '#94AD00', /* Primary green from logo */
				'deep-bottle-green': '#055630', /* Dark green from logo */
				'evergreen': '#044725' /* Darkest green from logo */
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-up': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'wiggle': {
					'0%, 100%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px #94AD00, 0 0 10px #94AD00, 0 0 15px #94AD00'
					},
					'50%': {
						boxShadow: '0 0 20px #94AD00, 0 0 30px #94AD00, 0 0 40px #94AD00'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'rotate-360': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'elastic': {
					'0%': {
						transform: 'scale(1)'
					},
					'30%': {
						transform: 'scale(1.25)'
					},
					'40%': {
						transform: 'scale(0.75)'
					},
					'60%': {
						transform: 'scale(1.15)'
					},
					'80%': {
						transform: 'scale(0.95)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'morph': {
					'0%, 100%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
					},
					'50%': {
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
					}
				},
				'marquee': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-up': 'slide-in-up 0.5s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'rotate-360': 'rotate-360 1s linear infinite',
				'elastic': 'elastic 0.6s ease-out',
				'morph': 'morph 8s ease-in-out infinite',
				'marquee': 'marquee 15s linear infinite'
			},
			backgroundImage: {
				'gradient-green': 'linear-gradient(135deg, #94AD00 0%, #055630 100%)',
				'gradient-green-light': 'linear-gradient(135deg, #D8E588 0%, #94AD00 100%)',
				'gradient-green-dark': 'linear-gradient(135deg, #055630 0%, #044725 100%)',
				'gradient-green-subtle': 'linear-gradient(135deg, #94AD00 0%, #055630 50%, #044725 100%)',
				'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(148, 173, 0, 0.4), transparent)'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			const newUtilities = {
				'.hover-scale': {
					'@apply transition-transform duration-300 hover:scale-105': {}
				},
				'.hover-scale-lg': {
					'@apply transition-transform duration-500 hover:scale-110': {}
				},
				'.hover-rotate': {
					'@apply transition-transform duration-500 hover:rotate-12': {}
				},
				'.hover-float': {
					'@apply transition-transform duration-500 hover:-translate-y-4': {}
				},
				'.hover-glow': {
					'transition': 'all 0.3s ease',
					'&:hover': {
						'boxShadow': '0 0 20px #94AD00, 0 0 40px #94AD00, 0 0 60px #94AD00',
						'transform': 'scale(1.05)'
					}
				},
				'.hover-pulse-scale': {
					'@apply transition-all duration-300 hover:scale-110 hover:animate-pulse': {}
				},
				'.hover-wiggle': {
					'@apply transition-transform duration-300 hover:animate-wiggle': {}
				},
				'.hover-elastic': {
					'@apply transition-all duration-300 hover:animate-elastic': {}
				},
				'.btn-gradient': {
					'background': 'linear-gradient(135deg, #94AD00 0%, #055630 100%)',
					'position': 'relative',
					'overflow': 'hidden',
					'&::before': {
						'content': '""',
						'position': 'absolute',
						'top': '0',
						'left': '-100%',
						'width': '100%',
						'height': '100%',
						'background': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
						'transition': 'left 0.5s'
					},
					'&:hover::before': {
						'left': '100%'
					},
					'&:hover': {
						'background': 'linear-gradient(135deg, #055630 0%, #044725 100%)',
						'transform': 'scale(1.05)',
						'boxShadow': '0 0 25px rgba(148, 173, 0, 0.5)'
					}
				},
				'.btn-gradient-light': {
					'background': 'linear-gradient(135deg, #D8E588 0%, #94AD00 100%)',
					'position': 'relative',
					'overflow': 'hidden',
					'&::before': {
						'content': '""',
						'position': 'absolute',
						'top': '0',
						'left': '-100%',
						'width': '100%',
						'height': '100%',
						'background': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
						'transition': 'left 0.5s'
					},
					'&:hover::before': {
						'left': '100%'
					},
					'&:hover': {
						'background': 'linear-gradient(135deg, #94AD00 0%, #055630 100%)',
						'transform': 'scale(1.05)',
						'boxShadow': '0 0 25px rgba(148, 173, 0, 0.6)'
					}
				},
				'.card-hover-3d': {
					'transform-style': 'preserve-3d',
					'transition': 'all 0.5s ease',
					'&:hover': {
						'transform': 'perspective(1000px) rotateX(10deg) rotateY(-10deg) scale(1.05)',
						'boxShadow': '20px 20px 40px rgba(0,0,0,0.3)'
					}
				},
				'.text-shimmer': {
					'background': 'linear-gradient(90deg, #94AD00, #D8E588, #94AD00)',
					'backgroundSize': '200% 100%',
					'WebkitBackgroundClip': 'text',
					'WebkitTextFillColor': 'transparent',
					'animation': 'shimmer 3s ease-in-out infinite'
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
