import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Kufi Arabic"', "sans-serif"],
        exo2: ['"Exo 2"', "sans-serif"],
        dmsans: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        primary: "#daae3a",
        secondary: "#e8be55",
      },
      backgroundImage: {
        "auth-background": "url('/images/bg-login.png')",
      },
    },
    container: {
      center: true,
    },
  },
};
