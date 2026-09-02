const links = {
  blog: 'https://medium.com/@tw0517tw',
  medium: 'https://medium.com/@tw0517tw',
  fb: 'https://www.facebook.com/tw0517tw',
  facebook: 'https://www.facebook.com/tw0517tw',
  github: 'https://github.com/tw0517tw',
  plurk: 'https://www.plurk.com/tw0517tw',
  twitter: 'https://twitter.com/tw0517tw',
};

const nextConfig = {
  async redirects() {
    return Object.entries(links).map(([name, url]) => ({
      source: `/${name}`,
      destination: url,
      permanent: false,
    }));
  },
};

export default nextConfig;
