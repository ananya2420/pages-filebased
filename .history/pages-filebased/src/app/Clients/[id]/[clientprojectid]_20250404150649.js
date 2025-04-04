// app/Clients/[id]/[clientprojectid].js

'use client'; // Ensure this is at the very top to mark the component as client-side

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function SelectedClientProjectPage() {
  const router = useRouter();
  const [clientProjectId, setClientProjectId] = useState(null);

  // Wait for the router to be ready and fetch the query parameters
  useEffect(() => {
    if (router.isReady) {
      // After the router is ready, set the client project ID from the query
      setClientProjectId(router.query.clientprojectid);
    }
  }, [router.isReady, router.query.clientprojectid]);

  // Show loading message while the router is not ready
  if (!clientProjectId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>The projects page for a specific project of a selected client (Project ID: {clientProjectId}).</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
