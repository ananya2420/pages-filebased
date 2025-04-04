'use client';

import {  usePathname } from 'next/navigation';

export default function PortfolioProjectPage() {
  //const params = useParams();
  const pathname = usePathname();

  console.log(pathname);         // Example: /Portfolio/123
  //console.log(params.projectid); // Example: 123

  return (
    <div>
      <h1>The portfolio project page</h1>
    </div>
  );
}
