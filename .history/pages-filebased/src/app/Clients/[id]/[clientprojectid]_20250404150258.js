// app/Clients/[id]/[clientprojectid].js

'use client'; // Make sure this is at the very top of the file

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function SelectedClientProjectPage() {
  const router = useRouter();
  const [clientProjectId, setClientProjectId] = useState(null);

  // Make sure to use useEffect to check when the router is ready
  useEffect(() => {
    if (router.isReady) {
      setClientProjectId(router.query.clientprojectid); // Get the dynamic parameter
    }
  }, [router.isReady, router.query.clientprojectid]);

  if (!clientProjectId) {
    return <div>Loading...</div>; // Show loading until router is ready
  }

  return (
    <div>
      <h2>The project page for a specific project of a selected client (Project ID: {clientProjectId}).</h2>
    </div>
  );
}

export default SelectedClientProjectPage;
