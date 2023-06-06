const { readFileSync } = require("fs");

const path = process.env.NETWORK_CONFIG;
const networkConfig = path ? JSON.parse(readFileSync(path, "utf8")) : {};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NETWORK_CONFIG: networkConfig,
  },
};

module.exports = nextConfig;
