// // ケントさんもともと
// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;


// モギ：DaisyUIをインストール。でもケントさんもともとのベースが優先される仕様
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // CSS変数ではなく直接値を指定
        foreground: '#171717',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        customtheme: {
          primary: '#4CAF50',
          secondary: '#FF5722',
          accent: '#3B82F6',
          neutral: '#3D4451',
          'base-100': '#ffffff', // DaisyUIテーマで直接色値を指定
          'base-content': '#171717',
          // 'base-100': 'var(--background)', // DaisyUIの背景色をカスタム変数にリンク
          // 'base-content': 'var(--foreground)', // フォントカラーをカスタム変数にリンク
        },
      },
    ],
  },
};

export default config;
