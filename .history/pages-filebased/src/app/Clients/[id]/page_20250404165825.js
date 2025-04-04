import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h2>The Clients Project Page</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/Clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
