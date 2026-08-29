import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rim: {
          bg: 'var(--rim-bg)',
          bg2: 'var(--rim-bg2)',
          surface: 'var(--rim-surface)',
          raised: 'var(--rim-raised)',
          line: 'var(--rim-line)',
          line2: 'var(--rim-line2)',
          cyan: 'var(--rim-cyan)',
          cyanLight: 'var(--rim-cyan-light)',
          cyanDeep: 'var(--rim-cyan-deep)',
          indigo: 'var(--rim-indigo)',
          text: 'var(--rim-text)',
          muted: 'var(--rim-muted)',
          faint: 'var(--rim-faint)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '1280px' },
    },
  },
  plugins: [],
};
export default config;
