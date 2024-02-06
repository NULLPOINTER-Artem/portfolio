import path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/scss')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
};

export default nextConfig;
