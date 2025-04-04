// app/Clients/[id]/[clientprojectid].js
'use client'; // Add this line at the top

import { useRouter } from "next/router";

function SelectedClientrojectPage() {
  const router = useRouter();
  console.log(router.query); // Now this will work correctly in the client-side

  return (
    <div>
      <h2>The project page for a specific project of a selected client.</h2>
    </div>
  );
}

export default SelectedClientrojectPage;
