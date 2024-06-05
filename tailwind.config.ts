import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {
        cadet: '#22223B',
        violet: '#4A4E69',
        rose: '#9A8C98',
        pale: '#C9ADA7',
        isabelline: '#F2E9E4'
      },
    },
  },
};