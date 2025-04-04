'use client';

import { useRouter } from 'next/navigation';

export default function PortfolioProjectPage() {
  //const params = useParams();
  const router = useRouter();

  // Use router for navigation (e.g., router.push('/some-page'))
  console.log(router.pathname);
    console.log(router.query)
  return (
    <div>
      <h1>The portfolio project page</h1>
      <button>Portfolio</button>
     
    </div>
  );
}
