import { useEffect } from 'react';
import { useRouter } from 'next/router';

const links = [
  { name: 'blog', url: 'https://medium.com/@tw0517tw' },
  { name: 'medium', url: 'https://medium.com/@tw0517tw' },
  { name: 'fb', url: 'https://www.facebook.com/tw0517tw' },
  { name: 'facebook', url: 'https://www.facebook.com/tw0517tw' },
  { name: 'github', url: 'https://github.com/tw0517tw' },
  { name: 'plurk', url: 'https://www.plurk.com/tw0517tw' },
  { name: 'twitter', url: 'https://twitter.com/tw0517tw' },
];

const Redirect = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const foundLink = links.find((link) => link.name === slug);

    if (slug && foundLink) {
      router.replace(foundLink.url);
    } else if (slug) {
      router.replace('/');
    }
  }, [router, slug]);

  return null;
};

export default Redirect;
