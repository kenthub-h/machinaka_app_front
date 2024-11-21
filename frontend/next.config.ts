import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Reactの厳密モードを有効化
  async redirects() {
    return [
      {
        source: '/', // ルートパスにアクセスした場合
        destination: '/home', // ホームページにリダイレクト
        permanent: true, // 永続的なリダイレクト (HTTP 308)
      },
    ];
  },
};

export default nextConfig;
