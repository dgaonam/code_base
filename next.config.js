/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/code_base' : '',
    publicRuntimeConfig: {
        contextPath: process.env.NODE_ENV === 'production' ? '/code_base' : '',
        uploadPath: process.env.NODE_ENV === 'production' ? '/code_base/upload.php' : '/api/upload'
    }
};

module.exports = nextConfig;
