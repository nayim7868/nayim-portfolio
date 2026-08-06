import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local LAN / WSL access only — ignored in production on Vercel.
  allowedDevOrigins: ["192.168.1.109", "172.19.16.1", "localhost"],
  poweredByHeader: false,
};

export default nextConfig;
