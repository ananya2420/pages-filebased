// app/Clients/[id]/[clientprojectid].js

'use client'; // Ensure this is at the very top to mark the component as client-side

import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  // Ensure that the router is ready before trying to access the query parameters
  if (!router.isReady) {
    return <div>Loading...</div>; // Optional loading state while waiting for the router to be ready
  }

  console.log(router.query); // Now this will work correctly on the client-side

  return (
    <div>
      <h1>
        The project page for a specific project of a selected client. <br />
        Client ID: {router.query.id}, Project ID: {router.query.clientprojectid}
      </h1>
    </div>
  );
}

export default SelectedClientProjectPage;
