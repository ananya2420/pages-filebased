// app/Clients/[id]/[clientprojectid].js

export default function SelectedClientProjectPage({ params }) {
    // Directly access the dynamic parameters from the `params` object
    const { id, clientprojectid } = params;
  
    return (
      <div>
        <h1>The projects page for a specific project of a selected client (Client ID: {id}, Project ID: {clientprojectid}).</h1>
      </div>
    );
  }
  