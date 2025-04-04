'use client'; // Ensure this is at the very top to mark this as a client-side component

import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  // Wait for the router to be ready before trying to access query parameters
  if (!router.isReady) {
    return <div>Loading...</div>; // Show loading state while waiting for the router to be ready
  }

  // Access the dynamic route parameters
  const { id, clientprojectid } = router.query;
  console.log(id, clientprojectid); // This should log the dynamic route parameters
  
  return (
    <div>
      <h1>
        The project page for a specific project of a selected client.<br />
        Client ID: {id}, Project ID: {clientprojectid}
      </h1>
    </div>
  );
}

export default SelectedClientProjectPage;
