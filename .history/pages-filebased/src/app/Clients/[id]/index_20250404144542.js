// app/Clients/[id].js

'use client'; // Mark the component as client-side

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function ClientProjectPage() {
  const router = useRouter();
  //const [clientId, setClientId] = useState(null);
/*
  useEffect(() => {
    // Ensure the router is ready before accessing the query parameters
    if (router.isReady) {
      setClientId(router.query.id); // Set the client ID from the URL
    }
  }, [router.isReady, router.query.id]);

  if (!clientId) {
    return <div>Loading...</div>;
  }
*/
  return (
    <div>
      <h2>The project page for a specific client (Client ID: {clientId}).</h2>
    </div>
  );
}

export default ClientProjectPage;
