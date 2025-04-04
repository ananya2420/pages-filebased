'use client';

import { useParams, useRouter } from 'next/navigation';

export default function PortfolioProjectPage() {
  const params = useParams();
  const router = useRouter();

  // Use router for navigation (e.g., router.push('/some-page'))
  console.log(params.projectid);

  return (
    <div>
      <h1>The portfolio ;roject page</h1>
      <button
        onClick={() => router.push('/Portfolio')}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Go to Portfolio Home
      </button>
    </div>
  );
}
