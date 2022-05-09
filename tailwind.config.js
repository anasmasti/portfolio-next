module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        whatsapp:
          "linear-gradient(#0d023e2e,#281773d4),url('/images/contact/whatsapp.webp')",
        messenger:
          "linear-gradient(#0d023e2e,#281773d4),url('/images/contact/messenger.webp')",
        mail: "linear-gradient(#0d023e2e,#281773d4),url('/images/contact/mail.webp')",
        telegram:
          "linear-gradient(#0d023e2e,#281773d4),url('/images/contact/telegram.webp')",
      },
    },
  },
  plugins: [],
};
