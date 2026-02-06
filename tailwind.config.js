module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
      },
      backgroundImage: {
        hijaby:
          "linear-gradient(#0d023e2e,#000000d4),url('/static/images/projects/hijaby.webp')",
        mediexperts:
          "linear-gradient(#0d023e2e,#000000d4),url('/static/images/projects/mediexperts.webp')",
        old: "linear-gradient(#0d023e2e,#000000d4),url('/static/images/projects/old.webp')",
        trescal:
          "linear-gradient(#0d023e2e,#000000d4),url('/static/images/projects/trescal.webp')",
        bp: "linear-gradient(#0d023e2e,#000000d4),url('/static/images/projects/bp.webp')",
      },
    },
  },
  plugins: [],
};
