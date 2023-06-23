/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: [{ min: "640px", max: "800px" }],
        
        
        xl: [{ min: "801px" }],
        
        
      },
    },
  },
  plugins: [],
}