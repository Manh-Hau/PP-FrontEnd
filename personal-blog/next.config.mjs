/** @type {import('next').NextConfig} */

const nextConfig = {
    i18n: {
        locales: ['en', 'vi'],
        defaultLocale: 'en',
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
