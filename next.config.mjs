/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🟢 ADD THIS LINE:
  output: 'export', 
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig