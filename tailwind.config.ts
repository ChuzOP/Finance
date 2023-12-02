import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        basics: {
          error: "#E73D1C",
          success: "#4DAF6E",
          white: "FFFFFF",
          whiteThin: "rgba(255, 255, 255, 0.7)",
          grayDisabled: "rgba(255, 255, 255, 0.08)",
          edit: "#68ADFE",
        },
        backgrounds: {
          black: "#191919",
          gray: "#F4F5F7",
          green: "#299D91",
        },
        gray: {
          gray01: "#525256",
          gray02: "#666666",
          gray03: "#878787",
          gray04: "#9F9F9F",
          gray045: "#D4D4D4",
          gray05: "#E8E8E8",
          grayThin: "rgba(210, 210, 210, 0.2)",
        },
      },
      gradients: {
        goldLarge: "linear-gradient(90deg, #C2922E 0%, #D49B16 25%, #FFF488 59.9%, #FED44D 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
