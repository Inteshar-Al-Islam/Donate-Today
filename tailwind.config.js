// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'], // Ensure this matches your HTML file location
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

