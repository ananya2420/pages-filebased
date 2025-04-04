// app/Clients/[id]/[clientprojectid].js

'use client'; // Mark the component as client-side

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function SelectedClientrojectPage() {
  const router = useRouter();
  const [clientProjectId, setClientProjectId] = useState(null);

  useEffect(() => {
    // Ensure the router is ready before accessing the query parameters
    if (router.isReady) {
      setClientProjectId(router.query.clientprojectid); // Set the client project ID from the URL
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
