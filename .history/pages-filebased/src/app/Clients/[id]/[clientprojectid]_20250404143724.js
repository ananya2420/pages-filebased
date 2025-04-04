// app/Clients/[id]/[clientprojectid].js

'use client'; // This must be at the very top of the file, before imports.

import { useRouter } from 'next/router';

function SelectedClientrojectPage() {
  const router = useRouter();
  console.log(router.query); // This should now work correctly in the client-side

  return (
    <div>
      <h2>The project page for a specific project of a selected client.</h2>
    </div>
  );
}

export default SelectedClientrojectPage;
