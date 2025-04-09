// tailwind.config.js
export default{
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
            zentry: ['zentry', 'sans-serif'],
            circular: ['circular-web', 'sans-serif'],
            general: ['general', 'sans-serif'],
            robertMedium: ['robert-medium', 'sans-serif'],
            robertRegular: ['robert-regular', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  