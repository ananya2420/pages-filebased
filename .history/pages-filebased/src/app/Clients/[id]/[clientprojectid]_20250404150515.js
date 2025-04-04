// app/Clients/[id]/[clientprojectid].js

'use client'; // Ensure this is at the very top

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function SelectedClientProjectPage() {
  const router = useRouter();
  const [clientProjectId, setClientProjectId] = useState(null);

  // Wait for the router to be ready and fetch the query parameters
  useEffect(() => {
    if (router.isReady) {
      setClientProjectId(router.query.clientprojectid); // This accesses the dynamic route parameter
    }
  }, [router.isReady, router.query.clientprojectid]);

  if (!clientProjectId) {
    return <div>Loading...</div>; // Show loading while waiting for the router to be ready
  }

  return (
    <div>
      <h1>The projects page for a specific project of a selected client (Project ID: {clientProjectId}).</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
