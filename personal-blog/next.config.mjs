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
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en/home-page',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
