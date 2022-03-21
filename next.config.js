/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // /contact 주소를 치면 네이버로 리다이렉트 됨
    return [
      {
        source: "/contact",
        destination: 'https://www.nave.com',
        permanent: false,
      },
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ]
  },
  // rewrite는 리다이렉트 하긴 하지만 url을 바꾸지 않음
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,

      }
    ]
  }
}

module.exports = nextConfig
