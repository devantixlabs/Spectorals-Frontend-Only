/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        banner: "#19191B",
        body: "#252525",
        "dark-black": "#0A0A0A",
        "light-gray": "#F7F7F7",
        "medium-gray": "#888888",
        "dark-gray": "#333",
        primary: "#CFFF04",
        "border-dark": "#5F606A",
        "yellow-yoke": "#ffaa00",
      },
      fontFamily: {
        "body-font": ["var(--font-body)"],
        "num": ["var(--font-stroke)"],
        "hero": ["var(--font-banner)"],
				"novel-serif": ["var(--font-novel-serif)"]
      },
      padding: {
        "px-200": "170px",
      },
    },
		cursor: {
			previousPage: 'url(/assets/images/cursor-arrow-left.png), pointer',
			nextPage: 'url(/assets/images/cursor-arrow-right.png), pointer',
		}
  },
  plugins: [require('tailwind-scrollbar')],
};
