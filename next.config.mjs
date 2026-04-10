/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // <--- É ESSA LINHA QUE RESOLVE O 403
  // ... (se tiver outras coisas aqui, como imagens, pode manter)
};

export default nextConfig;
