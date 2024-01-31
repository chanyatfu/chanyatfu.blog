import createNextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withNextra = createNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true
})

export default withNextra(nextConfig);
