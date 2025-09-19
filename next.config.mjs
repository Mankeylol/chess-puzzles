/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silence warnings
  // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },

  redirects: async () => {
    return [
      {
        source: "/well-known/farcaster.json",
        destination: "https://api.farcaster.xyz/miniapps/hosted-manifest/019962ce-fd2f-14e0-6bf2-dc08c85a8851",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
