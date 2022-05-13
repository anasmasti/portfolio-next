module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        whatsapp:
          "linear-gradient(#0d023e2e,#000000d4),url('/images/contact/whatsapp.webp')",
        messenger:
          "linear-gradient(#0d023e2e,#000000d4),url('/images/contact/messenger.webp')",
        mail: "linear-gradient(#0d023e2e,#000000d4),url('/images/contact/mail.webp')",
        telegram:
          "linear-gradient(#0d023e2e,#000000d4),url('/images/contact/telegram.webp')",
        'mediexperts-academy': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/mediexperts-academy.webp')",
        'coastalwest-limousines': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/coastalwest-limousines.webp')",
        'copra': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/copra.webp')",
        'hijaby': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/hijaby.webp')",
        'matiplas': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/matiplas.webp')",
        'm-global': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/m-global.webp')",
        'mediexperts': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/mediexperts.webp')",
        'ps': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/ps.webp')",
        'mysys': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/mysys.webp')",
        'old': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/old.webp')",
        'mc': "linear-gradient(#0d023e2e,#000000d4),url('/images/projects/mc.webp')",
      },
    },
  },
  plugins: [],
};
