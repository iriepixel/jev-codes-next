import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stop `next dev` from generating AGENTS.md.
  agentRules: false,
};

export default nextConfig;
