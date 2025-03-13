/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Desabilita a geração de arquivos .gz
  compress: false,
  // Importante: como estamos usando exportação estática, não podemos usar Server Components
  // ou Server Actions. Tudo deve ser renderizado no cliente.
};

export default nextConfig;
