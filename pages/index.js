// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /lms/home
    router.push('/home');
  }, []);

  return null; // You can leave the component empty or add content as needed
};

export default IndexPage;
