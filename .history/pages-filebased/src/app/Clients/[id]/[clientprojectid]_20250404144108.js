// app/Clients/[id]/[clientprojectid].js

'use client'; // Ensure this is at the top

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function SelectedClientrojectPage() {
  const router = useRouter();
  const [clientProjectId, setClientProjectId] = useState(null);

  useEffect(() => {
    // Wait for the router to be available on the client side
    if (router.isReady) {
      setClientProjectId(router.query.clientprojectid); // Access dynamic route parameters
    }
  }, [router.isReady, router.query.clientprojectid]);

  if (!clientProjectId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>The project page for a specific project of a selected client (Project ID: {clientProjectId}).</h2>
    </div>
  );
}

export default SelectedClientrojectPage;
