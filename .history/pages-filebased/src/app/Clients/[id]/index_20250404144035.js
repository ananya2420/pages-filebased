// app/Clients/[id].js

'use client'; // Ensure this is at the top

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function ClientProjectPage() {
  const router = useRouter();
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    // Wait for the router to be available on the client side
    if (router.isReady) {
      setClientId(router.query.id); // Access dynamic route parameters
    }
  }, [router.isReady, router.query.id]);

  if (!clientId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>The project of a given client (Client ID: {clientId}).</h2>
    </div>
  );
}

export default ClientProjectPage;
