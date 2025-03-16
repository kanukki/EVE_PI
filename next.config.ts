import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  assetPrefix: isProd ? "/webtools/" : "",
  basePath: isProd ? "/webtools" : "",
  trailingSlash: true,
  output: "export",
  distDir: "_site",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
